import { findIndex, find, remove, intersection, clamp, some } from 'lodash-es'
import { Perk } from 'global'
import { CHAR_COSTS, CHAR_COSTS_FULL, CHAR_COSTS_IMG, CHAR_COSTS_TICKET, useAllChars, WORLD_RATINGS, WORLD_RATINGS_DF } from '../data/constants'
import { defenseObject, talentsObject } from '../data/talents'
import { useChallenges } from './challenges'
import { usePlayStore } from './play'
import { SavedChar, useChargenStore } from './chargen'
import { useGlobalSettings } from './settings'
import { difficultyOptions } from '~/data/difficulty'

const { loan, jumpChain, trHistory, missionRewards } = usePlayStore()

const { bindingDiscount, luresDiscount } = useGlobalSettings()

const {
  baseBudget,
  allEffects,
  startingWorld,
  startingOrigin,
  coupleOrigin,
  localUserWorlds,
  intensities,
  difficulties,
  pvpPerks,
  binding,
  luresBought,
  otherPerks,
  heritage,
  ridePerks,
  homePerks,
  talentPerks,
  defensePerks,
  miscPerks,
  waifuPerks,
  genericWaifuPerks,
  companions,
  userCharacters,
  localUserCharacters,
  flags,
  budgetMods,
  allForSave,
  mode,
  params,
  userRides,
  localUserRides,
  fee,
  specificMods,
  patron,
  currentWorld,
} = useChargenStore()

const settings = useStorage('settings', {
  allChosenAuthors: [] as string[],
  allDLCTypes: [] as string[],
  nsfw: false,
  perkImages: true,
  columns: 'auto' as number | 'auto',
  columnsCompanions: 0,
  hideWorldImg: false,
  allImg: false,
  ableSell: false,
  hideDesc: false,
  textAlign: 'text-left',
  fontSize: 0,
  rebates: false,
  notification: false,
})

const heritageOptions = computed(() => [
  { label: 'None', value: '' },
  { label: 'Dragon', value: 'dr' },
  { label: 'Pirate', value: 'pi' },
  { label: 'Transhuman', value: 'th' },
  { label: 'Outsider', value: 'ou' },
  { label: 'Psychopomp', value: 'pp' },
  { label: 'Wendigo', value: 'we' },
  { label: 'Mastermind', value: 'mm' },
])

if (settings.value.allDLCTypes === undefined)
  settings.value.allDLCTypes = []

const csr = computed(() => findIndex(intensities.value, { title: 'Cash Still Rules' }) !== -1 || findIndex(difficulties.value, { title: 'Cash Still Rules' }) !== -1)

const baseBudgetAfter = computed(
  () => baseBudget.value + intensities.value.reduce((a, x) => x.intensity > 1 ? a + x.intensity : a, 0),
)

const companionsWithout = computed(() => companions.value.filter(c => c.role !== 'Exile' && c.role !== 'Traded Away'))

function costCalc(a: number, x: any) {
  return a += x && x.cost ? x.cost : 0
}

const pvpPerksCost = computed(() => pvpPerks.value.reduce(costCalc, 0))

const bindingCost = computed(() => binding.value.reduce(costCalc, 0) * bindingDiscount.value)
const heritageCost = computed(() => heritage.value.reduce(costCalc, 0))

const ridePerksCost = computed(() => ridePerks.value.reduce(costCalc, 0))
const homePerksCost = computed(() => homePerks.value.reduce(costCalc, 0))
const talentsCost = computed(() => talentPerks.value.reduce(costCalc, 0))
const defensesCost = computed(() => defensePerks.value.reduce(costCalc, 0))
const miscPerksCost = computed(() => miscPerks.value.reduce(costCalc, 0))
const waifuPerksCost = computed(() => waifuPerks.value.reduce((a, x) => a += x.costT ? -(x.refund || 0) : x.cost - (x.refund || 0), 0))
const genericWaifuPerksCost = computed(() => genericWaifuPerks.value.reduce(costCalc, 0))
const luresCost = computed(() => luresBought.value.reduce(costCalc, 0) * luresDiscount.value)
const otherCost = computed(() => otherPerks.value.reduce(costCalc, 0))
const difficultyCost = computed(() => difficulties.value.reduce(costCalc, 0))

const specificModsCost = computed(() => specificMods.value.reduce((a, x) => a += x.mod, 0))

const companionsCost = computed(() => {
  return companionsWithout.value.reduce((a, x) => {
    if (x.swap)
      a += x.swap.cost - x.swap.refund
    if (x.perk)
      a += x.perk.cost - x.perk.refund

    if (['buy', 'unbound'].includes(x.method))
      return a += x.price !== undefined && x.price !== -1 ? x.price : (CHAR_COSTS[x.priceTier] || 0)
    if (x.method === 'yoink') {
      const cost = CHAR_COSTS[x.priceTier] || 0
      const yoinkCost = cost * 0.2 < 1 ? 1 : cost * 0.2
      return a += cost + yoinkCost
    }
    if (x.method === 'used')
      return a += CHAR_COSTS[x.priceTier] || 0
    return a
  }, 0)
})

const { activeChallenges } = useChallenges()

const manualKf = useStorage('manualKf', 0)
const manualSellKf = useStorage('manualSellKf', 0)
const manualReturnKf = useStorage('manualReturnKf', 0)

const legacyMode = computed(() => findIndex(difficulties.value, { title: 'Legacy Difficulty' }) !== -1)

const captureKoeff = computed(() => {
  let kf = 0.25
  if (legacyMode.value) {
    kf = 0.6
    if (findIndex(intensities.value, { title: 'Cash Still Rules' }) !== -1) kf = 0.8
    if (findIndex(activeChallenges.value, { title: 'Waifu Manager' }) !== -1) kf = 0.8
    if (findIndex(activeChallenges.value, { title: 'Small Team' }) !== -1) kf = 0.7
    if (findIndex(intensities.value, { title: 'Wage Slave' }) !== -1) kf = 0
  }
  else {
    const dPerk = find(difficultyOptions, { uid: find(difficulties.value, { type: 'payment' })?.uid })
    kf = dPerk && dPerk.capture !== undefined ? dPerk.capture : 0.25
  }
  if (findIndex(difficulties.value, { title: 'Wage Slave' }) !== -1) kf = 0
  return manualKf.value || kf
})

const sellKoeff = computed(() => {
  const dPerk = find(difficultyOptions, { uid: find(difficulties.value, { type: 'payment' })?.uid })
  let kf = dPerk && dPerk.sell !== undefined ? dPerk.sell : 0.75
  if (legacyMode.value) {
    kf = 0.2
    if (findIndex(intensities.value, { title: 'Wage Slave' }) !== -1) kf = 0
  }
  if (findIndex(difficulties.value, { title: 'Wage Slave' }) !== -1) kf = 0
  return manualSellKf.value || kf
})

const returnKoeff = computed(() => manualReturnKf.value || 0.8)

// Difficulty Math
const difficultyRating = computed(() => {
  if (flags.value.danger11Start)
    return 10
  return legacyMode.value ? 6.25 : 1 + difficulties.value.reduce((a, perk) => a += (perk.intensity || 0), 0)
})

const difficultyAdjustedBudgets = computed(() => WORLD_RATINGS_DF.map(world => Math.round(Math.round(world * ((1 + 1.5) / (clamp(legacyMode.value ? 1 : difficultyRating.value, 0, 10) + 1.5)) / 5) * 5)))

const difficultyAdjustedCapture = computed(() => {
  return CHAR_COSTS_FULL.map((cost, i) => Math.floor(cost * clamp(difficultyRating.value, 0, 10) * captureKoeff.value * 0.16) % (i >= 11 ? 1000 : 10000))
})
const difficultyAdjustedSell = computed(() => {
  return CHAR_COSTS_FULL.map((cost, i) => Math.floor(cost * clamp(difficultyRating.value, 0, 10) * sellKoeff.value * 0.16) % (i >= 11 ? 1000 : 10000))
})

// const difficultyAdjustedCaptureExtra = computed(() => {
//   return CHAR_COSTS_FULL.map(cost => Math.min(Math.floor(cost * clamp(difficultyRating.value, 0, 10) * captureKoeff.value * 0.16), Math.floor(cost * 0.05)))
// })

const difficultyAdjustedCaptureT = computed(() => {
  return CHAR_COSTS_IMG.map(cost => Math.floor(cost * clamp(difficultyRating.value, 0, 10) * captureKoeff.value * 0.16 / 1000))
})
const difficultyAdjustedSellT = computed(() => {
  return CHAR_COSTS_IMG.map(cost => Math.floor(cost * clamp(difficultyRating.value, 0, 10) * sellKoeff.value * 0.16 / 1000) + (difficultyRating.value > 0 ? 1 : 0))
})

const companionProfit = computed(() => {
  return captureKoeff.value > 0
    ? companionsWithout.value.reduce((a, x) => {
      if (x.method === 'capture') {
        if (x.price === undefined) {
          const captureCost = legacyMode.value ? Math.floor((CHAR_COSTS[x.priceTier] || 0) * captureKoeff.value) : difficultyAdjustedCapture.value[x.priceTier]
          a += captureCost
        }
        else { a += x.price || 0 }
        return a
      }
      return a
    }, 0)
    : 0
})

// Note: Return waifus when u Have a Wage Slave rules are unclear
const companionProfitSold = computed(() => {
  return sellKoeff.value > 0
    ? companionsWithout.value.reduce((a, x) => {
      if (legacyMode.value && x.sold && x.tier <= 11 && ['capture'].includes(x.method)) {
        if (x.soldPrice === undefined) {
          if (legacyMode.value) {
            if (x.tier === 11)
              return a += Math.floor(CHAR_COSTS_FULL[x.tier] * sellKoeff.value)
            else
              return a += Math.floor(CHAR_COSTS[x.tier] * sellKoeff.value)
          }
        }
        else { return a += x.soldPrice }
      }

      if (x.sold && !legacyMode.value && x.method === 'capture')
        return a += difficultyAdjustedSell.value[x.tier]

      if (x.sold && x.priceTier <= 10 && ['buy', 'used', 'yoink'].includes(x.method))
        return a += Math.floor(CHAR_COSTS[x.priceTier] * returnKoeff.value)
      return a
    }, 0)
    : 0
})

const companionsWithoutSold = computed(() => companions.value.filter(c => !c.sold && c.role !== 'Exile' && c.role !== 'Traded Away'))

// Discounts
const types = {
  dr: 'Dragon',
  pi: 'Pirate',
  th: 'Transhuman',
  ou: 'Outsider',
  pp: 'Psychopomp',
  we: 'Wendigo',
  mm: 'Mastermind',
}
// const powerSwapDiscount = computed(() => {
//   const ps = startingOrigin.value.swap?.tier
//   const discount = { value: 0, archetype: '' }
//   if (ps) {
//     const yourPS = find(ps.complex, el => !!el.hr)
//     if (yourPS) {
//       discount.value = CHAR_COSTS[yourPS.newTier]
//       discount.archetype = types[yourPS.hr] || ''
//     }
//   }
//   return discount
// })

const maxHeritageDiscount = computed(() => {
  const discount = { archetype: '', value: 0 }
  if (startingOrigin.value.hr) {
    discount.archetype = types[startingOrigin.value.hr] || ''
    discount.value = CHAR_COSTS_FULL[startingOrigin.value.swap?.tier || startingOrigin.value.tier || 0] || 0
  }
  return discount
})

const usedHeritageDiscount = computed(() => {
  const hrCost = heritage.value.filter(x => x.tree && x.tree === maxHeritageDiscount.value.archetype)
    .reduce((a, x) => a += x.cost, 0)
  return maxHeritageDiscount.value.value < hrCost * 0.8 ? maxHeritageDiscount.value.value : hrCost * 0.8
})

const talentsDiscount = computed(() => {
  const cost = talentPerks.value.filter(x => x.count && x.count > 1 && !x.complex)
    .reduce((a, x) => a += (x.count - 1) * talentsObject[x.title]?.cost || 0, 0)
  // cost += talentPerks.value.filter(x => x.complex && x.complex.length).reduce((a, x) => a += x.complex.reduce((b, y) => b += (y.count - 1) * talentsObject[x.title].cost, 0), 0)
  return cost
})

const defensesDiscount = computed(() => {
  const cost = defensePerks.value.filter(x => x.count && x.count > 2)
    .reduce((a, x) => a += (x.count - 2) * defenseObject[x.title]?.cost || 0, 0)
  return cost
})

const isDefenseDiscountsDisabled = computed(() => findIndex(difficulties.value, { uid: 'l4UvD' }) !== -1)

const defenseRetinueDiscountAuto = computed(() => {
  if (isDefenseDiscountsDisabled.value)
    return {}
  const { allCharsObject } = useAllChars()

  const allDefTags = {
    st: 'Body Defense',
    hr: 'Wild Defense',
    hz: 'Environmental Defense',
    mt: 'Creature Defense',
    cl: 'Stress Defense',
    ml: 'Addiction Defense',
    ps: 'Mind Defense',
    bj: 'Possession Defense',
    dr: 'Drain Defense',
    id: 'Fatality Defense',
    pl: 'Polymorph Defense',
    ur: 'Wyldscape Defense',
    cr: 'Corruption Defense',
    sc: 'Information Defense',
    di: 'Trace Defense',
    fm: 'Destiny Defense',
    tm: 'Paradox Defense',
  } as Record<string, string>

  const allDefsDiscounts = defensePerks.value.reduce((a, x) => (a[x.title] = { discount: 0, count: x.count >= 2 ? 2 : 1, charNames: [] }, a), {} as Record<string, { discount: number; count: number; charNames: string[] }>)

  const sortedCompanions = (() => {
    const cmp = [] as { uid: number; cost: number }[]
    if (startingOrigin.value.swap || startingOrigin.value.uid)
      cmp.push({ uid: startingOrigin.value.swap?.uid || startingOrigin.value.uid, cost: CHAR_COSTS_FULL[startingOrigin.value.swap?.tier || 0] || startingOrigin.value.cost })

    companionsWithoutSold.value.forEach((companion) => {
      if (companion.swap || companion.perk) {
        if (companion.swap) {
          cmp.push({ uid: companion.swap.uid, cost: CHAR_COSTS_FULL[companion.swap.tier] })
          return
        }
        if (companion.perk && companion.perk.charUID)
          cmp.push({ uid: companion.perk.charUID, cost: CHAR_COSTS_FULL[companion.perk.tier] })
      }
      else { cmp.push({ uid: companion.uid, cost: CHAR_COSTS_FULL[companion.priceTier] }) }
    })

    return cmp.sort((a, b) => b.cost - a.cost || intersection(allCharsObject.value[a.uid]?.b, Object.keys(allDefTags)).length - intersection(allCharsObject.value[b.uid]?.b, Object.keys(allDefTags)).length)
  })()

  sortedCompanions.forEach((cmp) => {
    let availableDisc = cmp.cost
    if (allCharsObject.value[cmp.uid]) {
      allCharsObject.value[cmp.uid].b.forEach((tag) => {
        const defName = allDefTags[tag]
        if (defName && allDefsDiscounts[defName] !== undefined) {
          const dis = Math.min(availableDisc, defenseObject[defName].cost * 0.4)
          const totalPossible = defenseObject[defName].cost * allDefsDiscounts[defName].count
          const finalCharDisc = Math.min(dis, totalPossible - allDefsDiscounts[defName].discount)
          if (finalCharDisc > 0) {
            allDefsDiscounts[defName].discount += finalCharDisc
            allDefsDiscounts[defName].charNames.push(`${allCharsObject.value[cmp.uid].n} [${finalCharDisc}]`)
            availableDisc -= finalCharDisc
          }
        }
      })
    }
  })
  return allDefsDiscounts
})

const defenseRetinueDiscountAutoCredits = computed(() => Object.values(defenseRetinueDiscountAuto.value).reduce((a, x) => a += x.discount, 0))

const defenseRetinueDiscount = computed(() => {
  if (settings.value.rebates) {
    const cost = defensePerks.value.filter(x => x.defDiscount).reduce((a, x) => {
      if (x.count <= 1) {
        switch (x.defDiscount) {
          case 1:
            return a += defenseObject[x.title].cost * 0.4
          case 2:
            return a += defenseObject[x.title].cost * 0.8
          case 3:
            return a += defenseObject[x.title].cost
          default:
            return a += defenseObject[x.title].cost
        }
      }
      else {
        switch (x.defDiscount) {
          case 1:
            return a += defenseObject[x.title].cost * 0.4
          case 2:
            return a += defenseObject[x.title].cost * 0.8
          case 3:
            return a += defenseObject[x.title].cost * 1.2
          case 4:
            return a += defenseObject[x.title].cost * 1.6
          case 5:
            return a += defenseObject[x.title].cost * 2
        }
      }
      return a
    }, 0)
    return cost
  }
  else {
    return flags.value.danger11Start ? 0 : defenseRetinueDiscountAutoCredits.value
  }
})

const totalDiscount = computed(() => usedHeritageDiscount.value + talentsDiscount.value + defensesDiscount.value + defenseRetinueDiscount.value)

const fullStartingBudget = computed(() => {
  if (legacyMode.value) {
    let intensityFlat = 0
    const intenMultiplier = intensities.value
      .reduce((a, x) => x.intensity < 10 ? a += x.intensity : (intensityFlat += x.intensity, a), 0)

    let bd = baseBudget.value
    if (flags.value.danger11Start) bd = 2045

    return csr.value ? Math.round((bd + intensityFlat) * (intenMultiplier)) : Math.round((bd + intensityFlat) * (1 + intenMultiplier))
  }
  return csr.value ? 0 : (flags.value.danger11Start ? 2045 : difficultyAdjustedBudgets.value[startingWorld.value.rating]) || 0
})

// const creditLimit = computed(() =>
//   Math.max(500,
//     WORLD_RATINGS[startingWorld.value.rating - 1].budget,
//     jumpChain.value.reduce((a, x) => Math.max(a, WORLD_RATINGS[x.rating - 1].budget), 0),
//   ))

const creditLimit = computed(() => {
  const loanLimits = [500, 500, 400, 300, 200, 200, 100]
  if (legacyMode.value)
    return 500 + jumpChain.value.length * 100
  else
    return (loanLimits[difficultyRating.value] || 100) + jumpChain.value.length * 100
})

const missionRewardCredits = computed(() => Object.values(missionRewards.value).reduce((sum, miss) => sum += miss.rewards.reduce((missSum, rw) => rw.type === 'Credits' ? missSum += parseInt(`${rw.value}`) || 0 : missSum, 0), 0))

const missionRewardTickets = computed(() => Object.values(missionRewards.value).reduce((sum, miss) => sum += miss.rewards.reduce((missSum, rw) => rw.type === 'IMG Tickets' || rw.type === 'TX Tickets' ? missSum += parseInt(`${rw.value}`) || 0 : missSum, 0), 0))

const challengesCost = computed(() => activeChallenges.value.reduce((a, x) => a += x.cost, 0))

const originCost = computed(() => {
  let bd = 0
  if (startingOrigin.value.swap) {
    if (startingOrigin.value.swap.tier <= 10)
      bd += startingOrigin.value.swap.cost - startingOrigin.value.swap.refund
    else
      bd -= startingOrigin.value.swap.refund
  }
  if (startingOrigin.value.perk) {
    if (startingOrigin.value.perk.tier <= 10)
      bd += startingOrigin.value.perk.cost - startingOrigin.value.perk.refund
    else
      bd -= startingOrigin.value.perk.refund
  }
  return bd
})

const totalCost = computed(() => startingOrigin.value.cost + pvpPerksCost.value
  + bindingCost.value + heritageCost.value + luresCost.value + ridePerksCost.value + homePerksCost.value
  + talentsCost.value + defensesCost.value + miscPerksCost.value + waifuPerksCost.value
  + genericWaifuPerksCost.value + companionsCost.value + otherCost.value + fee.value
  + budgetMods.value.minus + challengesCost.value + originCost.value + difficultyCost.value)

const totalGain = computed(() => budgetMods.value.plus + companionProfit.value + companionProfitSold.value
  + usedHeritageDiscount.value + talentsDiscount.value + defensesDiscount.value + specificModsCost.value
  + budgetMods.value.sell11 * 1000 + missionRewardCredits.value + defenseRetinueDiscount.value)

const budget = computed(() => {
  const bd = fullStartingBudget.value - totalCost.value + totalGain.value

  // CSR implementation 3.0
  if (legacyMode.value) {
    if (flags.value.chargen && csr.value) {
      if (bd + loan.value.gained < 0) {
        const budget = Math.max(WORLD_RATINGS[startingWorld.value.rating].budget, 500)
        loan.value.gained = Math.min(Math.abs(bd), budget)
        loan.value.owed = loan.value.gained
      }
    }
  }
  else {
    if (flags.value.chargen && csr.value) {
      const loanLimits = [500, 500, 400, 300, 200, 200, 100]
      if (bd + loan.value.gained < 0) {
        const budget = loanLimits[difficultyRating.value] || 100
        loan.value.gained = Math.min(Math.abs(bd), budget)
        loan.value.owed = loan.value.gained
      }
    }
  }

  return bd + loan.value.gained
})

watch(csr, () => {
  if (csr.value === false) {
    loan.value.gained = 0
    loan.value.owed = 0
  }
})

const companionTicketProfit = computed(() => {
  return companionsWithout.value.reduce((a, x) => {
    if (legacyMode.value) {
      if (x.method === 'capture' && x.priceTier >= 11) a += Math.floor(CHAR_COSTS_TICKET[x.priceTier] * captureKoeff.value)
      if (x.method === 'capture' && x.sold && x.tier >= 11) a += Math.floor(CHAR_COSTS_TICKET[x.tier] * sellKoeff.value)
      if (x.method !== 'capture' && x.sold && x.priceTier >= 11) a += Math.floor(CHAR_COSTS_TICKET[x.priceTier] * returnKoeff.value)
    }
    else {
      if (x.method === 'capture' && x.priceTier >= 11) a += difficultyAdjustedCaptureT.value[x.priceTier]
      if (x.method === 'capture' && x.sold && x.tier >= 11) a += difficultyAdjustedSellT.value[x.tier]
    }
    return a
  }, 0)
})

function costCalcTX(a: number, x: Perk) {
  return a += x.costT || 0
}

const tier11tickets = computed(() => {
  // let ticket = 0
  // if (flags.value.danger11Start) ticket += 5

  const bindingCost = binding.value.reduce(costCalcTX, 0)
  const heritageCost = heritage.value.reduce(costCalcTX, 0)

  const ridePerksCost = ridePerks.value.reduce(costCalcTX, 0)
  const homePerksCost = homePerks.value.reduce(costCalcTX, 0)
  const talentsCost = talentPerks.value.reduce(costCalcTX, 0)
  const defensesCost = defensePerks.value.reduce(costCalcTX, 0)
  const miscPerksCost = miscPerks.value.reduce(costCalcTX, 0)
  const waifuPerksCost = waifuPerks.value.reduce(costCalcTX, 0)
  const genericWaifuPerksCost = genericWaifuPerks.value.reduce(costCalcTX, 0)
  const luresCost = luresBought.value.reduce(costCalcTX, 0)
  let first = true
  const companionsCost = companionsWithout.value.reduce((a, x, i) => {
    if (flags.value.danger11Start && first && x.tier >= 11 && x.tier <= 12) {
      first = false
      return 0
    }
    if (x.perk && x.perk.tier >= 11)
      a += CHAR_COSTS_TICKET[x.perk.tier]
    if (x.swap)
      return x.swap.tier >= 11 ? a += CHAR_COSTS_TICKET[x.swap.tier] : a
    return x.priceTier >= 11 && x.method !== 'capture' ? a += CHAR_COSTS_TICKET[x.priceTier] : a
  }, 0)

  const originPSTicket = startingOrigin.value.swap && startingOrigin.value.swap.tier >= 11 ? CHAR_COSTS_TICKET[startingOrigin.value.swap.tier] : 0
  const originSWPTicket = startingOrigin.value.perk && startingOrigin.value.perk.tier >= 11 ? CHAR_COSTS_TICKET[startingOrigin.value.perk.tier] : 0

  return -heritageCost - ridePerksCost - homePerksCost - talentsCost - defensesCost - miscPerksCost
    - waifuPerksCost - genericWaifuPerksCost - luresCost - companionsCost - bindingCost
    - budgetMods.value.minus11 + budgetMods.value.plus11 + companionTicketProfit.value - budgetMods.value.sell11 + missionRewardTickets.value - originPSTicket - originSWPTicket - (startingOrigin.value.costT || 0)
})

const companionsComp = computed(() => companionsWithoutSold.value.filter(cmp => ['Companion', 'Familiar'].includes(cmp.role) || !cmp.role))

const isCouple = computed(() => findIndex(intensities.value, { title: 'Couple’s Account (Cooperative)' }) !== -1 || findIndex(difficulties.value, { title: 'Couple’s Account (Cooperative)' }) !== -1)

watch(isCouple, () => {
  if (isCouple.value) {
    if (findIndex(companions.value, { spouse: true }) === -1) {
      companions.value.push({
        uid: 777777777,
        name: 'Your SO',
        sex: 'F',
        world: '',
        tier: 1,
        priceTier: 0,
        method: 'unbound',
        spouse: true,
      })
    }
  }
  else {
    remove(companions.value, cmp => cmp.spouse)
  }
})

watch(() => budgetMods.value.sell11, () => {
  if (budgetMods.value.sell11 === undefined)
    budgetMods.value.sell11 = 0
})

const targetList = computed(() => {
  const comps = companionsComp.value.map(x => (x.name))
  if (['Substitute', 'Possess'].includes(startingOrigin.value.title))
    comps.unshift(startingOrigin.value.character || 'You')
  else
    comps.unshift('You')
  return comps
})

const targetListwithUID = computed(() => {
  const comps = companionsComp.value.map(x => ({ name: x.name, uid: x.uid }))
  if (['Substitute', 'Possess'].includes(startingOrigin.value.title))
    comps.unshift({ name: startingOrigin.value.character || 'You', uid: startingOrigin.value.uid || 0 })
  else
    comps.unshift({ name: 'You', uid: 0 })
  return comps
})

const yourTier = computed(() => {
  const calcTier = (perks: Perk[]) => {
    let tier = 1
    perks.forEach((perk) => {
      if (tier < 4 && ['Death Mask', 'Under Jolly Roger'].includes(perk.title)) tier = 4
      if (tier < 5 && ['First Augmentation', 'The First Bite', 'Your Soul Is Mine', 'The Pact is Sealed'].includes(perk.title)) tier = 5
      if (tier < 6 && ['Corporeal Transcendence Engineering', 'Dragon Heart', 'Harbinger of Deаth'].includes(perk.title)) tier = 6
      if (tier < 7 && ['Evolutionary Engine Array', 'Dragon Scale', 'Foul Darkness', 'None Can Excel', 'Sinforged Visage'].includes(perk.title)) tier = 7
      if (tier < 8 && ['Incandescent Ascendancy Machine', 'Double Dragon', 'The Great Hunger'].includes(perk.title)) tier = 8
    })
    return tier
  }

  const talentsTier4 = findIndex(talentPerks.value, x => ['Template Stacking I'].includes(x.title) && some(x.complex, target => target.target.includes('You'))) !== -1 ? 4 : 0
  const talentsTier5 = findIndex(talentPerks.value, x => ['Template Stacking II'].includes(x.title) && some(x.complex, target => target.flavor.includes('You'))) !== -1 ? 5 : 0
  let shroudTier = findIndex(binding.value, { title: 'Shroud of Power' }) !== -1 ? 5 : 0
  shroudTier = Math.max(findIndex(binding.value, { title: 'Alterzelu Symbiote' }) !== -1 ? 4 : 0, shroudTier)
  const originTier = startingOrigin.value?.perk?.tier || startingOrigin.value.tier || 0
  const heritageTier = calcTier(heritage.value)
  const powerSwapTier = startingOrigin.value.swap && startingOrigin.value.swap.tier ? startingOrigin.value.swap.tier : 0
  return Math.max(originTier, heritageTier, talentsTier4, talentsTier5, shroudTier, powerSwapTier)
})

const companionsUIDs = computed(() => companions.value.reduce((a, c) => (a[c.uid] = c, a), {} as Record<number, SavedChar>))
const companionsByUID = computed(() => companions.value.reduce((a, c) => (a[c.perk?.uid || c.swap?.uid || c.uid] = c, a), {} as Record<number, SavedChar>))

const underLoan = computed(() => loan.value.owed > 0)

watch(startingWorld, () => {
  currentWorld.value = startingWorld.value
})

const collapsedDescs = useStorage<string[]>('collapsedDescs', [])
const collapsedDescsSet = computed(() => new Set<string>(collapsedDescs.value))

export const appName = ref('')

watch(() => intensities.value.length, () => {
  if (!isCouple.value && coupleOrigin.value.tier > 1) {
    coupleOrigin.value = {
      title: '',
      character: 'Significant Other',
      sex: 'F',
      tier: 1,
      cost: 0,
    }
  }
})

const devotionPoints = computed(() => binding.value.reduce((a, x) => a += x.dCost ? x.dCost : 0, 0))

const noBindings = computed(() => binding.value.length === 0)

export function useStore() {
  return {
    budget,
    baseBudget,
    baseBudgetAfter,
    allEffects,
    startingWorld,
    startingOrigin,
    coupleOrigin,
    localUserWorlds,
    intensities,
    difficulties,
    pvpPerks,
    binding,
    luresBought,
    otherPerks,
    heritage,
    ridePerks,
    homePerks,
    talentPerks,
    defensePerks,
    miscPerks,
    waifuPerks,
    genericWaifuPerks,
    companions,
    userCharacters,
    localUserCharacters,
    flags,
    tier11tickets,
    bindingCost,
    otherCost,
    heritageCost,
    ridePerksCost,
    homePerksCost,
    talentsCost,
    defensesCost,
    miscPerksCost,
    waifuPerksCost,
    genericWaifuPerksCost,
    luresCost,
    companionsCost,
    budgetMods,
    allForSave,
    targetList,
    targetListwithUID,
    companionProfit,
    companionProfitSold,
    totalCost,
    mode,
    params,
    userRides,
    localUserRides,
    yourTier,
    companionsUIDs,
    companionsByUID,
    fullStartingBudget,
    fee,
    captureKoeff,
    creditLimit,
    underLoan,
    csr,
    loan,
    trHistory,
    usedHeritageDiscount,
    maxHeritageDiscount,
    talentsDiscount,
    defensesDiscount,
    defenseRetinueDiscount,
    settings,
    appName,
    totalDiscount,
    companionsWithoutSold,
    companionsComp,
    specificMods,
    patron,
    collapsedDescs,
    collapsedDescsSet,
    manualKf,
    manualSellKf,
    manualReturnKf,
    sellKoeff,
    returnKoeff,
    specificModsCost,
    missionRewardCredits,
    isCouple,
    devotionPoints,
    defenseRetinueDiscountAuto,
    defenseRetinueDiscountAutoCredits,
    originCost,
    heritageOptions,
    difficultyRating,
    difficultyCost,
    legacyMode,
    difficultyAdjustedCapture,
    difficultyAdjustedCaptureT,
    difficultyAdjustedSell,
    difficultyAdjustedSellT,
    difficultyAdjustedBudgets,
    noBindings,
  }
}
