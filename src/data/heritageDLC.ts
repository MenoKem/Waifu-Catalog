import { Heritage } from 'global'

export const fullHeritagesDLC: Heritage[] = []

// Psychopomp Heritage Tree
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: '0blBZ',
  title: 'Death Mask',
  category: 'Heritage',
  image: 'https://i.imgur.com/of6Geukl.png',
  cost: 100,
  complex: 'flavor',
  anything: 'Type',
  freebies: {
    talentPerks: [{ title: 'Body Tune-Up', cost: 0, count: 1 }, { title: 'Everlasting Talent', cost: 0, count: 1 }, { title: 'Soul Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Body Defense', cost: 0, count: 1 }, { title: 'Destiny Defense', cost: 0, count: 1 }],
  },
  tree: 'Psychopomp',
  desc: `
    Body and Soul, you are no longer truly human. Deаth itself rests within the vessel you have become, waiting to be released. Take Body Tune-Up, one copy of Body Defense, Destiny Defense, Everlasting Talent and Soul Talent for free. You are a Being of Deаth, a messenger from the beyond come to save, or condemn, the souls of the deceased. That you are “alive” and someone else is dead is no longer of any concern. You may now learn to freely interact with the souls of the dead, and may bind them as though they were alive for the purposes of capturing. They are, however, still dead and will not have a corporeal body unless revived or resurrected via other means. You are empowered by your newfound connection to the afterlife, strengthening mind, body and soul so that you may carry out your duty. Upon selection of this perk, you may designate a type of psychopomp to manifest as (Egyptian Animal-deity, Grim Reaper, Shinto Shinigami, etc.). This form influences all future Psychopomp heritage abilities, and may interact differently with afterlives you encounter in your travels. If you were not already, this perk raises your effective tier to 4.
    `,
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'xSpp2',
  title: 'Your Soul Is Mine',
  category: 'Heritage',
  image: 'https://i.imgur.com/z1kIfXzl.png',
  cost: 75,
  freebies: {
    defensePerks: [{ title: 'Drain Defense', cost: 0, count: 1 }, { title: 'Stress Defense', cost: 0, count: 1 }],
  },
  tree: 'Psychopomp',
  desc: `
  What some might call immaterial, or others an illusion, you reign over. You may harness the souls of others for your own purposes, refusing to allow them to pass into their intended afterlife until you decide otherwise. Take one copy of Stress Defense and Drain Defense for free. Your chosen theme of psychopomp will influence how you take these souls, but you will always have the ability to do so. Souls can be used to amplify spells, be bound to objects, or devoured for their knowledge and skills. A soul used to power a spell will increase the spell’s potency by a measure proportional to the soul’s Tier. A soul bound to an item may empower that item with aspects it held in life, though every result is as different as the soul in question. 
    <p>Should the soul possess no other value, you may consume it. Consuming a soul does not inherently destroy it; by default, it purifies it, sending the soul to whatever afterlife it may fit into. However, some souls may be so tainted by their actions in life, or unlife, that they are not fit for reincarnation or rest. These souls, you may choose to devour completely, stripping them of both karma and knowledge. Souls devoured this way are permanently destroyed, removed from any cycle of death and rebirth. Souls devoured for knowledge offer up only the skills they used as well as the secrets they guarded  most fervently. Forgotten lore or information, no matter how important, remains clouded or is entirely forgotten by the dead.</p>
    <p>Bound souls can be kept within your own, shielding them from outside effects. This will not protect a retinue member’s physical body, and until you free their soul from your own, Warranty Plan will not activate. Souls held within your own can generate Devotion if you have a Dungeon. If you possess the Burial Shroud, any souls you absorb through its functions or the Deep Weave perk are filtered through this ability, giving you all the same benefits. If you were not already, this perk raises your effective tier to 5.</p>
    `,
  whitelist: ['Death Mask'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'gMmFq',
  title: 'Book of the Dead',
  category: 'Heritage',
  image: 'https://i.imgur.com/dOaqSGpl.png',
  cost: 25,
  tree: 'Psychopomp',
  desc: `
  A hefty, ancient tome finds its way into your possession, filled with inscrutable symbols and scrawlings, as though written by a madman. When opened within or before any form of multiversal travel, its maddening gibberish will reform itself into a detailed dossier on the most recent person of interest to have died within said world. The information will contain their name (or names, if they answer to more than one), physical information, manner of death, their murderer if there was one, and the current location of their soul if it is separated from their mortal shell. If you have Target Tracker, and their soul resides in another realm, dimension, or afterlife, the Book of the Dead will specify which. The Book of the Dead will also contain a living person’s estimated date of death, but will not yield more information until the individual has died. The Book of the Dead is indestructible, and cannot be taken from its owner unless willingly relinquished. If the owner so desires, the Book will return to their side like any other Company tool. None but the owner and their retinue may decipher its contents.
    `,
  whitelist: ['Death Mask'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'JrxZa',
  title: 'Harbinger of Deаth',
  category: 'Heritage',
  image: 'https://i.imgur.com/8oOZyUol.png',
  cost: 175,
  freebies: {
    talentPerks: [{ title: 'Martial Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Drain Defense', cost: 0, count: 1 }, { title: 'Corruption Defense', cost: 0, count: 1 }],
  },
  tree: 'Psychopomp',
  desc: `Deаth flows around, and through you. Take Martial Talent, and one copy of Soul and Corruption Defense for free. You may now take on the form of the Harbinger at will, embodying the mythology you have selected. The Inner-Deаth coiled within your form has unleashed itself and can now be donned at a moment’s notice, be it a cloak and hood upon a face of bone, a jackal’s fangs and claws grasping a set of scales, or a pair of wings and a horn. All who gaze upon your form now know you to be Of Deаth, filling those without the fortitude to look the End in the face with fear befitting their stature. While in your Harbinger form, you may interact with a living being’s soul separate from their physical form, and freely enter into any unwarded realms or worlds meant to house spirits. So long as a realm is not itself metaphysically locked by some power or law, it may be entered. 
    <p>You may choose to emit a passive aura of terror, paralyzing those of weaker will (or of a lower Tier) with the fear of Deаth.</p>
    <p>Deаth must have his scythe and as such you may bind a weapon to your Harbinger form, making it part of the form itself and thus part of you. If you have purchased Your Soul Is Mine, you may place a soul into your Harbinger-bound weapon, increasing its power and qualities proportionally to the soul, allowing it to take on aspects of the spirit used to empower it. Weapons enhanced in this fashion escalate in potency against the undying, immortal, unliving, or otherwise deathless in proportion to the tier of the soul within. You may bind multiple weapons to your Harbinger Form, equal to your Tier in number, but each must be enhanced individually. Any weapons you have altered in this way become a focus of power through which any Deаth-based magics or abilities (Kido, Necromantic Magics, Deаth Arts, etc.) you have learned may be cast. Powers utilized in this manner are supercharged by the soul-power coursing through you, and their effects are magnified accordingly with your effective Tier.</p>
    <p>If you have a Shroud of Power, your Shroud automatically becomes part of your Harbinger form and benefits from its properties. If you were not already, this perk raises your effective tier to 6.</p>
    `,
  whitelist: ['Death Mask'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'mxJDm',
  title: 'The Moth And The Flame',
  category: 'Heritage',
  image: 'https://i.imgur.com/jE4epNDl.png',
  cost: 50,
  freebies: {
    defensePerks: [{ title: 'Addiction Defense', cost: 0, count: 1 }],
    talentPerks: [{ title: 'Blessed Talent', cost: 0, count: 1 }],
  },
  tree: 'Psychopomp',
  desc: `
  Deаth lingers here. Something about you, about your presence, causes souls to wander your way. Take the Blessed Talent and one copy of Addiction Defense for free. Those who are recently dead will stick around a little longer than can be excused, and those who feed on souls will find it hard to think about anything but you so long as they are in your presence. Those able to see souls will view yours as being of the highest quality possible, remarkable in its power and refinement. This effect is exacerbated by entering your Harbinger form if it has been purchased. The slightest sip of your essence (or your essence) while in this form will be enough to satisfy any spiritual needs, though it may not end them depending on the nature of the hunger. Faerie Feast may be applied to this effect if you truly wish to addict someone to your very soul.
    `,
  whitelist: ['Death Mask'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'IUs3n',
  title: 'Baby Take My Hand',
  category: 'Heritage',
  image: 'https://i.imgur.com/GABqfdul.png',
  cost: 75,
  freebies: {
    talentPerks: [{ title: 'Communication Talent', cost: 0, count: 1 }],
    lures: [{ title: 'Alluring Whisper', cost: 0, count: 1 }],
  },
  tree: 'Psychopomp',
  desc: `Often, in the moments before death, the soul… flickers. Willpower wavers. Resilience weakens as fear sets in. And when offered a hand, one may be outstretched in answer. Take Communication Talent and the Alluring Whisper lure for free. You may, when present at the moment of an individual’s death, offer them a choice. The offer occurs in a single, frozen instant in time, where both participants may barter to their satisfaction. Upon agreement and finalization, time will resume. Beings of considerable strength may be able to interfere and disrupt this process. The proposed offer must be a valid transaction of something within your power to accomplish in exchange for something the recipient is capable of giving. This is typically a verbal agreement, but if you possess the Signed and Sealed perk, you may formalize a Binding contract. Upon their acceptance, their cause of death is averted, and upon the completion of the agreed upon terms, they are considered Stamped, pending the three day binding period.
    <p>Alternatively, they may choose to enter your service directly as a bound Psychopomp of your chosen theme, skipping all timers and immediately becoming part of your retinue. This option must be offered clearly and without trickery: Deаth is nothing if not fair</p>
    <p>Some deals may be declared invalid if subject to outside forces, and an appropriate replacement substituted instead. There are limits to what you may agree to, and any deal proposed that would disrupt your ability to continue operating as a contractor are forbidden.</p>
    `,
  whitelist: ['Death Mask'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: '5zf7I',
  title: 'Pay The Ferryman',
  category: 'Heritage',
  image: 'https://i.imgur.com/pKPTwBpl.png',
  cost: 50,
  freebies: {
    talentPerks: [{ title: 'Wild Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Wild Defense', cost: 0, count: 2 }],
  },
  tree: 'Psychopomp',
  desc: `The River Styx. The Heavenly Staircase. The Bridge of the Dead. There are many ways to and from many realms of death, and you will walk them all. Take Wild Talent and two copies of Wild Defense for free. When arriving in a world with a physical path to its afterlife, you will be able to find the path without trouble, be it by guide or by instinct. Once you have been to an afterlife that is not your own, you may access it again through the portal function of your Pocket Home, your Harbinger Form’s weapon, or your Shroud of Power if you own one. When you enter a realm of spirits or the dead, you may open another doorway into any other realm of the dead you have been to before, traveling to and from Catalog worlds you have visited previously through their afterlives. You may bring souls with you from one realm to another, but must observe their traditions while doing so.
    `,
  whitelist: ['Harbinger of Deаth'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'MVOid',
  title: '...And All His Friends',
  category: 'Heritage',
  image: 'https://i.imgur.com/fp5lioRl.png',
  cost: 100,
  freebies: {
    defensePerks: [{ title: 'Trace Defense', cost: 0, count: 1 }, { title: 'Possession Defense', cost: 0, count: 2 }],
  },
  tree: 'Psychopomp',
  desc: `Deаth takes everyone eventually so why not let your loved ones get a headstart? Take one copy of Trace Defense and two copies of Possession Defense for free. You may now gift souls to those you have bound, slowly pulling them into the same limbo you exist in. Retinue members fed enough souls will begin to take on traits of your harbinger form if you have acquired it, culminating in them gaining one of their own, raising their effective tier by 1. IMG tier individuals do not benefit from this increase. The number of souls required to gain this benefit is proportional to a waifu’s effective tier, with retinue members of a higher tier requiring more souls to power their evolution to attain a harbinger form.
    `,
  whitelist: ['Your Soul Is Mine'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'oafeJ',
  title: 'The Unquiet Grave',
  category: 'Heritage',
  image: 'https://i.imgur.com/lAUBbeWl.jpg',
  cost: 130,
  freebies: {
    defensePerks: [{ title: 'Paradox Defense', cost: 0, count: 1 }, { title: 'Wyldscape Defense', cost: 0, count: 1 }],
  },
  table: [
    ['Tier', 'Totem Radius'],
    ['1', '5 km'],
    ['2', '10 km'],
    ['3', '25 km'],
    ['4', '50 km'],
    ['5', '100 km'],
    ['6', '250 km'],
    ['7', '500 km'],
    ['8', '1000 km'],
    ['9', '10000 km'],
    ['10', '100000 km'],
  ],
  tree: 'Psychopomp',
  desc: `Some unfortunate worlds possess nowhere for their souls to go, and some afterlives are worse than death itself. You have the power to fix that. Take one copy  of Paradox Defense  and Wyldscape Defense for free. You may create a Totem of Deаth: an item crafted in the likeness of your psychopomp theme out of a sacrificed soul, a physical object, and your own spiritual essence. When placed in a world, this Totem will attract and sweep the souls of the dead into a ceaselessly expanding dimension only you have access to. You may shape your new afterlife as you see fit, be it a place of rest, joy, or torment. The range of the Totem widens proportionally to the tier of the soul sacrificed.
  <p>You may  assign retinue members who have transformed into psychopomps through the use of ...And All His Friends to organize, watch over, and guide souls to this new afterlife. Prayer directed to you at an individual’s death will direct them to your Totem on their own. If you so desire you may relinquish souls from your possession. Any soul devoured within this realm will either be recycled– stripped of all self and reborn as a pure, new soul– or sent back to their original world to begin again at your discretion.</p>
  <p>Additionally, if you have the Pocket Apartment, Demiplane, or any of its upgrades, you may place your Afterlife within its confines. further improvements to your Demiplane will be reflected in your Afterlife as you are able to apply Demiplane laws to your realm. Established Dungeons may at your discretion be linked to your afterlife.</p>
    `,
  whitelist: ['Your Soul Is Mine'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: '2dWYR',
  title: 'None Can Excel',
  category: 'Heritage',
  image: 'https://i.imgur.com/vszHw2Sl.png',
  cost: 220,
  freebies: {
    defensePerks: [{ title: 'Paradox Defense', cost: 0, count: 1 }, { title: 'Fatality Defense', cost: 0, count: 2 }],
  },
  tree: 'Psychopomp',
  desc: `All things end. A universal truth, a cornerstone of life itself. And now, you are part of it. Every fiber of your being is now entwined with Deаth, and your soul is no different. Take one copy of Paradox Defense, and the full Fatality Defense for free. Your mastery over souls now extends to your own, creating a realm of Deаth and Unlife within. This realm obeys your whims, changing its terrain and environment, able to take on attributes of spells, techniques, or abilities you have learned through the consumption of souls. On command, this realm can manifest and impose itself upon your surroundings, transporting yourself and those around you in a 100m radius into its confines. When in the presence of a previously placed Totem, the range of this ability expands to twice its normal size. This effect does not stack. 
    <p>Within this realm, things that are considered ‘Immortal’ or ‘Without End’ are hindered greatly, reducing their effective tier by 1. Your Harbinger Form’s terror aura will now physically freeze those affected by it while in the effect of None Can Excel.</p>
    <p>Your Harbinger Form’s appearance may now be changed at any time. If you have purchased the Burial Shroud, it can become a portal to this inner realm without needing to fully manifest it outside of your physical form. If you were not already, this perk raises your effective tier to 7.</p>
    `,
  whitelist: ['Harbinger of Deаth', 'Your Soul Is Mine', 'Pay The Ferryman', 'The Moth And The Flame'],
})
fullHeritagesDLC.push({
  dlc: 'Gale',
  dlclink: 'https://docs.google.com/document/d/1oHccbJhaeGa6rkFJpqeRRe5bmG2Ozy6y6k64AVxncYk/edit#heading=h.yytwjyibr91u',
  uid: 'E2QbC',
  title: 'Evermore',
  category: 'Heritage',
  image: 'https://i.imgur.com/WTcI4HPl.png',
  cost: 0,
  costT: 1,
  tree: 'Psychopomp',
  desc: `At long last, you arrive at the pinnacle. You Are Deаth, and none shall escape you. The souls within your grasp are yours to mold as you please; every secret and aspect is available to you to peruse or alter at your leisure. You no longer need to destroy a soul in order to learn its secrets, and any magics or skills that might be gleaned from such an act are learned in their totality. You may, at will, incarnate souls you possess, allowing them to walk the earth once more in your service. Soul-bound items have their ownership transferred to you when you take possession of the soul they reside within, and you may allow their original wielders to make use of them if you have incarnated them
    <p>While within your Deаth-realm, you may call upon any soul you possess and work your magics through them. Be it a single servant, a powerful warrior, or indeed an entire army to raise arms against your enemies, they will answer and serve. Your Harbinger weapons may now have multiple souls placed within them, though they may only hold four at most. Any Demiplane laws you have purchased will now affect the territory of None Can Excel.</p>
    <p>Additionally, every Totem you have created until this point is now a phylactery, a beacon for your own soul to reform at, should it ever be destroyed. This reformation process proceeds at the same rate as your Warranty Plan and will fail if said totem is destroyed or damaged. The range of each totem also expands accordingly to cover the entire local universe you have placed it in. This does not cover parallel worlds, only the one a totem has been placed in.</p>
    `,
  whitelist: ['None Can Excel', 'The Unquiet Grave', 'Warranty Plan'],
})

// Wendigo Heritage
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'vQrco',
  title: 'The First Bite',
  category: 'Heritage',
  image: 'https://i.imgur.com/oRH5VOil.png',
  cost: 85,
  freebies: {
    talentPerks: [{ title: 'Body Tune-Up', cost: 0, count: 1 }, { title: 'Everlasting Talent', cost: 0, count: 1 }, { title: 'Martial Talent', cost: 0, count: 1 }, { title: 'Covert Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Information Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `The unending hunger of the Wendigo takes hold. It is inside of you now, restrained and waiting for you to indulge in it. You are now able to take the form of a three-meter-tall humanoid Wendigo, a gaunt monstrosity with long clawed limbs and an ash-grey complexion. Your speed and agility are all maximized in this form, without sacrificing any of your strength or durability. You are now an apex hunter, as your movements make no noise nor cause any vibrations. You may now choose to no longer leave any traces of your presence such as footprints, a heat signature, or DNA evidence. Take Body Tune-Up, Everlasting Talent, Martial Talent, and Covert Talent as well as one copy of Information Defense for free. 
    <p>Wendigos are creatures of gluttony and you are no different. The consumption of living beings and their flesh is now your greatest strength, as with each subsequent meal your power grows. By consuming the flesh of others, you can acquire a sliver of their physical attributes and strength. The greater the amount of a being's flesh you eat, the greater the proportion of physical attributes and strength you gain from them. This goes up to a maximum of a tenth of their original physical attributes if you consume them in their entirety. If you were not already, you are now a Tier 5.</p>
    `,
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: '3J4r7',
  title: 'Hunting Ground',
  category: 'Heritage',
  image: 'https://i.imgur.com/caBJtuVl.jpg',
  cost: 75,
  freebies: {
    talentPerks: [{ title: 'Athletic Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Trace Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `The Hunting Ground of a Wendigo is a place many have faced their downfall, consumed by the creature to satiate its limitless appetite. You now benefit from a circular area with a radius of your Tier^2 kilometers around a location of your choice, where your effective tier is raised by one unless you are a TX or more already. A Hunting Ground is established through slaughter, requiring the blood of ten sapient beings to be spilled at its center. A Hunting Ground can be established anywhere, whether that be in an urban, rural, or alien environment. You can sense anyone with an equal or lower tier than you within your Hunting Ground and are completely invisible to any methods of detection and sensing from beings inside of it. Take Athletic Talent and one copy of Trace Defense for free. 
    <p>You are able to grow your Hunting Ground by your Tier^2 meters for each sapient being you either directly or indirectly kill and consume inside of it. Total consumption is not required as a mass as large as a human limb will count towards the expansion of your grounds. While you are limited to only one Hunting Ground, you may choose to move its location once every month. This will require a fresh massacre to be committed and will shrink it back to its initial size. </p>
    `,
  whitelist: ['The First Bite'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'tGTVj',
  title: 'Heart of Ice',
  category: 'Heritage',
  image: 'https://i.imgur.com/bKv0oPzl.jpg',
  cost: 90,
  freebies: {
    defensePerks: [{ title: 'Stress Defense', cost: 0, count: 2 }, { title: 'Wild Defense', cost: 0, count: 2 }, { title: 'Trace Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `Wendigos are the embodiments of winter and frost, with hearts so cold that even the hottest fires cannot hope to melt them. Your bone-chilling presence now weakens the willpower of those around you, as they slowly lose their will to fight back or run to escape your jaws. While those with exceptionally strong wills may be resistant to this effect, most others will be immobilized, ripe to become your next meal.
    <p>Your Hunting Ground now reflects this change in you and will be shrouded in a harsh blizzard whose intensity you may control at will. The aesthetic of this storm can be altered to match that of your Elemental Shroud or Heritage Element if you possess one. Take two copies of Stress Defense and Wild Defense, as well as one copy of Trace Defense for free.</p>
    <p>Any being you choose to deem as prey inside your Hunting Ground will be afflicted by a growing and unnatural feeling of hunger and famine, which will weaken them in correlation to their body size and the time they remain on your grounds, up to a full one-tier drop in strength. The greater the tier of the being, the more time it will take for this effect to take hold. For example, while a Tier 3 humanoid will begin to feel the effects after just a few minutes spent in your Hunting Ground, those of higher tiers may require several days or even years. IMG tier beings remain immune to this effect.</p>
    `,
  whitelist: ['Hunting Ground'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'A8wbF',
  title: 'Sacred Taboos',
  category: 'Heritage',
  image: 'https://i.imgur.com/VdSTqCvl.jpg',
  cost: 25,
  multiple: true,
  max: 3,
  tree: 'Wendigo',
  desc: `Wendigos are creatures that stem from broken taboos, as they originate from instances when man chose to do the unthinkable. You are now able to impose one taboo that beings in your Hunting Ground must not break. Examples include committing a physical action, using a specific supernatural ability, or even saying a certain word. Beings that enter your Hunting Ground will feel an inherent feeling of danger and unease as a warning when about to commit said action.
    <p>In the case where the warning is ignored and the imposed taboo is broken, you may choose to afflict them with any sort of negative effect or curse you choose. This can be anything, including insanity, pain, or even instant death. The greater the tier of the being compared to yours, the greater the chances that the being will resist or be immune to the effect. If you have purchased the Heart of Ice perk, breaking a taboo will also double the rate at which a being will experience the starvation debuff. You will instinctively know when a taboo was broken and will know the location of the individual even if their respective tier is higher than yours. </p>
    <p>This perk can be purchased multiple times, with each subsequent purchase increasing the number of taboos you can impose by one, up to a maximum of three. Each purchase will cost an additional 25 credits, up to a maximum of 75. If you were not already, you are now a Tier 6.</p>
    `,
  whitelist: ['Hunting Ground'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'gtFv8',
  title: 'Call of the Wild',
  category: 'Heritage',
  image: 'https://i.imgur.com/ahwXtHKl.jpg',
  cost: 70,
  freebies: {
    talentPerks: [{ title: 'Wild Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Possession Defense', cost: 0, count: 2 }, { title: 'Mind Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `Why seek and hunt your prey when you can have it come to you? You are now able to leave tokens or symbols in your Hunting Ground which will compel users to delve deeper into it. These can be practically anything, from footprints and scratch marks to strung-up corpses and runic carvings. Beings you have deemed as prey who encounter these lures will be compelled to travel a maximum distance of your Tier^4 meters toward the center of your Hunting Ground. The strength of a token's compulsion diminishes with each additional token placed in your Tier^4 meter range from the first. Beings with a strong will can be resistant or even immune to a token's compulsion. 
    <p>Tokens further increase the effectiveness of the starvation-induced by the Heart of Ice perk. With each token a being visually sees or touches, the intensity of the starvation they feel is doubled. This eventually leads to psychosis or insanity as after seeing too many tokens most victims will think of nothing else but sating their terrible hunger, driving them further into the center of your Hunting Ground. You can control the intensity of this increase and if you so wish, stop tokens from influencing the strength of the starvation debuff completely. You may also choose to completely remove this debuff from those affected by it. Take Wild Talent, two copies of Possession Defense, and one copy of Mind Defense for free.</p>
    `,
  whitelist: ['Heart of Ice'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'no1AR',
  title: 'Foul Darkness',
  category: 'Heritage',
  image: 'https://i.imgur.com/2USzVzyl.png',
  cost: 130,
  freebies: {
    talentPerks: [{ title: 'Land Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Corruption Defense', cost: 0, count: 1 }, { title: 'Creature Defense', cost: 0, count: 2 }],
  },
  tree: 'Wendigo',
  desc: `The darkness inside of you now seeps outside, permeating the air and corrupting the very land you reside in. You can now emit and control a stench of darkness and rot in the form of a dark miasma from your Wendigo form, which will spread in a Tier^3 meter-wide area around you. Living beings that smell these vapors will be twice as susceptible to your willpower-draining presence. This foul darkness does not stop there, weakening and perverting the possessions of those it touches. Swords will dull, enchantments will weaken, armor becomes brittle and magical items will fail to work. The strength of this effect increases with exposure and may be used to completely wither away or subvert an item bound to an individual to belong to you.
    <p>You Hunting Ground now reflects this change as the darkness seeps through it, twisting and corrupting anything that resides within. At your discretion, nature will seem to twist and warp, becoming a perverse reflection of what it once was, as the land is saturated with your power. The strength of your blizzard increases, as you may raise its intensity to a degree that any individual deemed as prey and of a lower tier than you will instantly freeze over in a time proportional to the difference in tiers. This effect varies if you have an Elemental Shroud or a Heritage Element, as prey may instead be immolated or poisoned if the respective element is chosen as the aesthetic of the storm.</p>
    <p>Your influence spreads to the sky above your Hunting Ground, providing  you with the option to have it shrouded in an eternal night, increasing your effective tier by another tier  inside of your territory unless you are a TX or more already. This change in the heavens is imperceptible to those located outside of your territory's boundaries, and will gradually appear as one ventures further toward its center. The ambient darkness now resides within your tokens, transforming them at will into shadowy rifts you can use to travel around your Hunting Ground. Take Land Talent as well as one copy of Corruption Defense and two copies of Creature Defense for free. If you were not already, you are now a Tier 7.</p>
    `,
  whitelist: ['Heart of Ice'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'EzFRb',
  title: 'The Great Hunger',
  category: 'Heritage',
  image: 'https://i.imgur.com/qsELNjpl.png',
  cost: 115,
  freebies: {
    defensePerks: [{ title: 'Environmental Defense', cost: 0, count: 1 }, { title: 'Addiction Defense', cost: 0, count: 2 }, { title: 'Body Defense', cost: 0, count: 2 }],
  },
  tree: 'Wendigo',
  desc: `As your power grows, so does the gluttony you embody. Your Wendigo form evolves, reaching a new base maximum height of 25 meters. Your previously human-like face is replaced by a menacing deer skull with antlers. The theme of this transformation can be altered to match either your Elemental Shroud or Heritage Element if you possess one. If you have the Foul Darkness perk, you are able to transform into the foul dark miasma you emit, allowing you to shroud someone in it to easily devour them. Take one copy of Environmental Defense and two copies of Addiction Defense and Body Defense for free.
    <p>From now on, with each consumed living being the maximum size you can shift into in your Wendigo form increases in proportion to the size of the being you have consumed. These increases stack and have no upper limit, allowing you to reach truly gigantic sizes with the proper meal. The greater your size, the more durable and strong you become, without losing any of your previous speed or agility. This allows you to  increase your respective tier by one at your maximum size unless you are already a TX. Consuming beings will now grant up to half of their original physical strength and attributes.</p>
    <p>Your Hunting Ground will now expand by your Tier^3 meters instead of the initial Tier^2 when you consume the required amount of a killed subject. You are now also able to change the specifics of the sort of hunger prey within your Hunting Ground will suffer from, allowing you to induce gluttony for both materialistic and abstract concepts such as money, power, or reproduction</p>
    <p>While Wendigos are inherently extremely selfish creatures, you have grown to savor not only your food but your companions as well. Your stomach is now larger inside than it appears from the outside, allowing you if you so choose to safely hold living beings that you swallow whole, without the risk of them being digested. Anyone held inside your stomach will be protected by your Defenses as if they had them personally. You can now make your stomach juices heal those inside, restoring their energies and returning them to their prime. The greater the damage the individual has sustained, the more time they will need to spend in your stomach to recuperate. Once swallowed, individuals of an equal or lower tier than you will be unable to exit your stomach without you allowing them to do so. Swallowed individuals will not have an impact on your outside appearance or abilities. If you were not already, you are now a Tier 8.</p>
    `,
  whitelist: ['Sacred Taboos'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: '6B8Y8',
  title: 'Just Like Me',
  category: 'Heritage',
  image: 'https://i.imgur.com/ZOC22Xtl.png',
  cost: 115,
  freebies: {
    defensePerks: [{ title: 'Corruption Defense', cost: 0, count: 1 }, { title: 'Information Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `You are now able to turn other beings into Lesser Wendigos. These Wendigos are subservient to you and are only able to operate within your Hunting Ground. Killing and consuming prey will allow Lesser Wendigo to grow in size as well as strength, gradually evolving, though at a slower pace compared to you. Lesser Wendigos can make use of your tokens to travel around your Hunting Ground to hunt your prey and can create tokens in your stead. The consumption of beings by Lesser Wendigo will contribute to the expansion of your Hunting Ground. As their leader, you can control who or what they kill and feast on. Take one copy of Corruption Defense and Information Defense for free.
    <p>Subjects that reach the center of your Hunting Ground and consume some of your flesh will have their existing feelings of hunger magnified, transforming them into Lesser Wendigo who start as Tier 4 beings. The initial tier of a Lesser wendigo may be even higher, however, depending on the original strength and tier of the subject. This process has consequences as it will permanently mutate subjects in a gruesome fashion, turning them into gaunt monsters ready to serve your will.</p>
    <p>You may however also choose to have your flesh satisfy a subject's hunger instead, in which case they will be considered Stamped, provided they do not exit your Hunting Ground pending the three-day binding period. Subjects must choose to consume your flesh willingly and of their own volition for either of the two processes to work.</p>
    `,
  whitelist: ['Call of the Wild'],
})

fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: '8Otd3',
  title: 'Overhauled Menu',
  category: 'Heritage',
  image: 'https://i.imgur.com/UUkCG8vl.jpg',
  complex: 'flavor',
  cost: 125,
  freebies: {
    talentPerks: [{ title: 'Soul Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Drain Defense', cost: 0, count: 1 }, { title: 'Environmental Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `Your appetite has grown to desire something more than simple flesh. Choose one element, either physical or conceptual. In addition to flesh, you are now able to devour and feast on this element to grow your Hunting Ground and Wendigo form. The greater the size of your Wendigo form, the greater the amount of your chosen element you can consume at once. If you were unable to do so already, you may now alter the aesthetic of the atmospheric effects within your Hunting Ground to match your selected element.
    <p>Retinue members within your stomach will benefit from your new eating habits and may now be gradually infused with the properties of your chosen element when it is consumed. Devouring a sufficient amount of an element will gradually make members immune to it and allow them to infuse it into their abilities and powers. Retinue members will eventually be able to fully morph their body into the respective element as well as consume it themselves to grow their power and strength. Such feats require prolonged exposure and infusion, which can take months to fully achieve. The infusion of an element is by default spread equally amongst all individuals within your stomach, though one can be prioritized over the other if you so choose. Waifu with an inherent affinity for an element will be infused at a much faster rate than others.</p>
    <p>If you have purchased the Just Like Me perk, your Lesser Wendigos will also be able to consume your chosen element, albeit in smaller proportions than you. Consumption of an element by a Lesser Wendigo will contribute to the growth of a Hunting Ground. Take Soul Talent and one copy of Drain Defense and Environmental Defense for free.</p>
    `,
  whitelist: ['The Great Hunger'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'af9Ru',
  title: 'Ultimate Taboo',
  category: 'Heritage',
  image: 'https://i.imgur.com/KpFG2thl.png',
  cost: 120,
  freebies: {
    defensePerks: [{ title: 'Drain Defense', cost: 0, count: 1 }, { title: 'Fatality Defense', cost: 0, count: 1 }],
  },
  tree: 'Wendigo',
  desc: `Wendigos are the embodiment of selfishness and care only for themselves. You are now able to grow in power by doing the unthinkable and consuming the flesh of your very own retinue members. By consuming their flesh you can acquire all the biological and racial powers and abilities they may have. The amount of power you receive depends on their status in your retinue and the quantity of their flesh you have consumed
    <p>Consuming a familiar in its entirety will provide you with a replica of all biological and racial abilities they may have. Consuming a companion in their entirety will provide you with all the biological and racial abilities they have at one tier higher than their current strength. IMG tier companions will only provide you with an exact copy of their powers. The greater the bond you had with your companion or familiar, the more natural these abilities will feel when first utilized and the easier it will be to integrate them with any you possessed beforehand.</p>
    <p>If you have purchased the Overhauled Menu perk, you will no longer be limited to purely biological powers or traits and will be able to acquire the soul, psychic, or conceptual abilities and characteristics of your retinue members linked to your respective element. Take one copy of Drain Defense and  Fatality Defense for free.</p>
    `,
  whitelist: ['The Great Hunger'],
})
fullHeritagesDLC.push({
  dlc: 'DepressedAlucard',
  dlclink: 'https://docs.google.com/document/d/18LaGf5cy9hDA7ZAInhxVJoTocWfeLo0PI_msQsFu76Q/edit#',
  uid: 'ZYkgN',
  title: 'A Wendigo World',
  category: 'Heritage',
  image: 'https://i.imgur.com/Y6nvz5Ul.jpg',
  cost: 0,
  costT: 1,
  tree: 'Wendigo',
  desc: `You have become the embodiment of endless gluttony, with an appetite larger than that of any other. To sate it, your Lesser Wendigos are able to leave your Hunting Ground and form Hunting Grounds of their own via the required massacre. These new Hunting Grounds benefit from the Heart of Ice, Foul Darkness, Call of the Wild, and Sacred Taboos perks. If you so choose, any taboos you have imposed on your Hunting Ground will be applied to those of your Lesser Wendigo. The flesh of your retinue members can now be used as an alternative when creating new Lesser Wendigo. Retinue members infused to the point of being able to consume your respective element will now contribute to the growth of your Hunting Ground.
    <p>If you have purchased the Rainbow Bridge perk, these Hunting Grounds are not limited to just one world, as your Lesser Wendigos will be able to operate in any you have visited before. You can also choose to travel between these worlds via the rifts formed by the tokens located in the various Hunting Grounds.</p>
    <p>You are now able to telepathically command and communicate with your Lesser Wendigos, providing commands and instruction even while being worlds away. In the case of your body being destroyed, you may choose to turn into your black miasma and travel through a rift to possess one of your Lesser Wendigos. This essentially transfers your consciousness and powers to a new body, preventing an untimely demise. This process will fail if you have no Lesser Wendigo available or are unable to complete it in a period of 72 hours.</p>
    <p>If you have acquired the maxed-out Sweet Home Expansion (x25), Demiplane, and Dungeons expansions for your pocket space, you are now able to relocate and integrate any Hunting Grounds you have into it. The original locations of your personal and Lesser Wendigos Hunting Grounds in various worlds will now act as gateways for anyone who steps foot in them, unknowingly transporting them inside your pocket space where the one true Hunting Ground now lies. The Hunting Grounds will continue to expand in size as new victims are killed, growing larger in both your pocket space and the universes they are established in.</p>
    `,
  whitelist: ['The Great Hunger', 'Foul Darkness', 'Just Like Me'],
})

fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'VgkVg',
  title: 'Eccentric Wealth',
  category: 'Heritage',
  image: 'https://i.imgur.com/ghPUIyEl.jpg',
  cost: 20,
  freebies: {
    talentPerks: [{ title: 'Performance Talent', cost: 0, count: 1 }, { title: 'Body Tune-Up', cost: 0, count: 1 }],
    genericWaifuPerks: [{ title: 'Paper Trail', cost: 0, complex: [{ flavor: 'You' }], count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Looking for more money? While the company can't really justify expanding your allowance, they can finagle you to become inheritor to an obscure Estate. This comes with a number of benefits, most notably being able to take your wealth with you to new worlds. This Estate may be a title of lesser or defunct nobility in some obscure and remote region, the fortune created by the mercantilism of an ancillary commodity, or other sufficient means appropriate to the local world.
    <p>Thanks to this Estate, you have a finite but endlessly refilling pool of transient resources, the size of which will scale to your own personal power, your Tier. The resources can't be accumulated but will refill overnight, so you should make use of them as you desire. These resources are real, and sourced from the local economy, and take on non-standard forms of goods and services. More often than not they will be based on what sort of Estate you have. Between it and the petty cash provided by the company, you shouldn't run into any issues acquiring mundane equipment, cheap labour, or strange gifts.</p>
    <p>The absolute requirement we have is that you maintain airs, certain standards of behaviour in line with being the primary and only heir. To that end we will provide you with a Personality Package loaded with behaviour patterns that form a persona you will be required to maintain for the purpose of keeping and expanding your Estate's reputation, whether through adulate fame or notorious infamy. Prеsentation is of the utmost importance. If you desire to maintain multiple masks for different situations, that is up to you, however the main face is what matters to your Estate. To help you stay in character, you receive the Performance Talent perk in addition to the Personality Package. This will make you a T2 entity at Step 2 for our purposes, if you're not already.</p>
    <p>The company also covers some cosmetic or genetic changes needed to pass muster including a full Body Tune-Up, though if you need to be a different species you'll have to pay for your own Extra, Possess, or Substitute Origin.</p>
    <p>To give the Estate an actual presence in the world we need to give you the Paper Trail perk. This will have the knock on effect of letting you bring your Estate with you to any world you visit, should you wish it.</p>
    `,
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'ZVzCL',
  title: 'Artist\'s Lair',
  category: 'Heritage',
  image: 'https://i.imgur.com/eNXHqs9l.jpg',
  cost: 20,
  freebies: {
    talentPerks: [{ title: 'Aesthetic Talent', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Extending the reach of your Estate to cover real-estate allows you to make use of abandoned or otherwise overlooked structures. You can always find a base of operations to work from, though it must exist somewhere in the world you are currently in, preferably near where you will be operating. This is your Hideout.
    <p>It is a Dungeon, the size and depth of which is based on the amount of Devotion points you could provide at the time of acquisition, and will have amenities and workshops you can make use of. If you devote time to maintaining the Hideout, you can provide your Devotion value again to upgrade it, with the exception of increasing the floor space, depth, or creating portals; the Hideout is always and only accessible to the world it resides in. If space ever becomes an issue, or for any other reason, then you can abandon your Hideout and go searching for a new one, a process that can take a day or so.</p>
    <p>If you actually have the Dungeons perk, then any retinue member may contribute Devotion points to your Hideout.</p>
    <p>As proper presentation is paramount, your Personality Package will be updated to include the Aesthetic Talent and some tricks on how to draw attention to these aesthetics for maximum impact.</p>
    `,
  whitelist: ['Eccentric Wealth'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'DMFHx',
  title: 'Exit Strategies',
  category: 'Heritage',
  image: 'https://i.imgur.com/AzYKbAWl.jpg',
  cost: 100,
  freebies: {
    defensePerks: [{ title: 'Fatality Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Your survival is paramount to your Estate (even, or especially, if you produce heirs). As such, tricks and techniques will be provided to your Personality Package to prevent your untimely demise, such as instructions on how to prepare escape tunnels and create suitable decoys and body doubles. If you have purchased the Sick Ride perk, the motor pool will always have a spare ready for you to use as a getaway vehicle from a prepared area. You can even benefit your Companions and Familiars with these methods, to a lesser extent.
    <p>So sophisticated and elaborate are these hated tricks that as long as you're out of sight of any non-friendly parties, you will never have to worry about fatal injuries.</p>
    <p>Your Personality Package will be updated to provide the certainty of these effects so you won't flinch in the face of possible death like a normal person. You'll gain a point of Fatality Defense, and are considered a T4 entity at step 2 from this point on.</p>
    `,
  whitelist: ['Artist\'s Lair'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'ONEaC',
  title: 'Exemption from Death',
  category: 'Heritage',
  image: 'https://i.imgur.com/nseghFGl.jpg',
  cost: 100,
  freebies: {
    talentPerks: [{ title: 'Everlasting Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Fatality Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate now properly covers insurance against your death, so you don't die when killed. Instead if you are vanquished you are sent to another world. You get Everlasting Talent and one instance of Fatality Defense so that things that should outright kill you, like old age or the Power Word (Kill) spell, just don't. Your Personality Package will also be updated with an increase to your confidence, to better make use of these changes.
    <p>If someone does manage to kill you, you may not come back unless you have retinue members in that world and one year and one day have passed. In that world, Retinue members may dedicate Devotion points every day at a former Hideout, and each accumulation equal to your own value reduces that time by one day, to a minimum of one day. (If you're a T8 entity, 365 T8 companions and/or familiars may spend a day devoted to bringing you back, and then you may anytime afterwards.)</p>
    <p>If you have the Pocket Apartment perk, you may spend your time recuperating, relaxing, contemplating, etc. there. You have a number of days equal to your Tier before you must go to another world. If you know how to travel between universes or otherwise have options already available you may choose which world to go to, otherwise it is a random world of a similar DR to the one you were just vanquished from.</p>
    <p>Just note that if this perk is abused your enemies may take steps to expedite killing you, or may wise up and try to contain you instead.</p>
    `,
  whitelist: ['Exit Strategies'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'MsOll',
  title: 'Esoteric Toolbox',
  category: 'Heritage',
  image: 'https://i.imgur.com/pBsPD8sl.jpg',
  cost: 125,
  freebies: {
    talentPerks: [{ title: 'Engineering Talent', cost: 0, count: 1 }, { title: 'Aesthetic Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Polymorph Defense', cost: 0, count: 1 }, { title: 'Possession Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `The connections of your Estate are expanded to include valuable items like the remnants of secret societies, archives of ancient cults, the strange truth behind superstitions, defunct military research groups, and mothballed industrial projects. In addition to uncovering hidden histories and actual - if now dissolved - conspiracies, you can now always find wacky gadgets, weird chemicals, and strange rituals, even in worlds that don't normally have them. Their performance may be suspect or exaggerated, but they will have some effect for you. In some cases you may find notes on what an ancient relic was truly capable of, leaving it up to you if you want to retrieve it from the museum or collector wasting its potential. Perhaps with some time and research you can expand their use or make your own.
    <p>You gain the Aesthetic Talent so that you can coordinate your gear's appearance, Engineering Talent so that you'll at least never compromise their function when you do so, and a point of Polymorph Defense and Possession Defense so that you don't accidently trap yourself in a snake transformation or something. You are now able to enter a flow state when working on your equipment, which will increase your efficiency and negate boredom.
    </p>
    `,
  whitelist: ['Eccentric Wealth'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: '9T7NN',
  title: 'Sick Ride',
  category: 'Heritage',
  image: 'https://i.imgur.com/T4I2ySLl.jpg',
  cost: 45,
  freebies: {
    talentPerks: [{ title: 'Science Talent', cost: 0, count: 1 }, { title: 'Aesthetic Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Wild Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `A motor pool is added to your Estate. A fleet of  low quality off brand experimental vehicles is acquired for you to use as your signature Sick Ride, though for insurance purposes only one vehicle is available for use at a time. They are all repaired, retrofitted and upgraded to the local modern standards, of course. If you already own or later acquire a small or personal vehicle we can make an assembly run of that vehicle instead. In either case, your Sick Ride qualifies and benefits from any Catch-a-Ride perks, ignoring any restrictions.
    <p>You can install wacky gadgets or other devices into it, if you know how, or create universal attachment points for interfacing with other vehicles you can build or acquire. You get Science Talent so that you always know how to use your vehicle, Aesthetic Talent so that you can match its appearance to your persona, and a point of Wild Defense to help protect it (and you) from inclement weather. Your Personality Package will also come with the ability to enter a heightened state of focus so that you are more difficult to interrupt while working on your vehicle.</p>
    `,
  whitelist: ['Eccentric Wealth'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'RpxSV',
  title: 'Fearsome Flying Fortress',
  category: 'Heritage',
  image: 'https://i.imgur.com/atgrz04l.jpg',
  cost: 100,
  freebies: {
    defensePerks: [{ title: 'Trace Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `If your Sick Ride or Hideout aren't enough, you can now acquire a single Large vehicle (at least as big as a 200 metre long boat) to act as a mobile Headquarters. It is sourced from local industries in a similar manner to your Sick Ride.
    <p>None of these issues are concerns for you. Your Headquarters is so over engineered that it requires but a handful of a crew to operate. You may, of course, obtain a more normal vehicle and retrofit it, or buy one from the Catch-a-Ride program instead, in which case there is no upper limit on the size.</p>
    <p>You may upgrade and modify your Headquarters in many of the same ways as a Sick Ride.
    Like your Hideout, you may apply Devotion to upgrade your Headquarters with the same restrictions. If you have the Demiplane perk, the inside of the Headquarters is considered under your Jurisdiction for every law you have, with the exception of Persistent Corruption.</p>
    <p>To help obfuscate your mobile Headquarters' location, you get one instance of Trace Defense, as well as an update to your Personality Package to integrate airs of mystery to yourself and your associates.</p>
    `,
  whitelist: ['Artist\'s Lair', 'Sick Ride'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'jmpdg',
  title: 'Libertine Service',
  category: 'Heritage',
  image: 'https://i.imgur.com/hgSagLDl.jpg',
  cost: 20,
  freebies: {
    defensePerks: [{ title: 'Stress Defense', cost: 0, count: 1 }],
    talentPerks: [{ title: 'Covert Talent', cost: 0, count: 1 }, { title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Athletic Talent', cost: 0 }, { flavor: 'Covert Talent', cost: 0 }, { flavor: 'Performance Talent' }], count: 3 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate gains priority access to temp-work agencies and job boards. This allows you to gain a new category for your Retinue, Minions. They gain about a third of the benefits of any talents, perks, or Defenses as anyone in your retinue. While they have negligible value to the company as captures, in terms of abilities they are roughly equal to a mundane Extra insert for the local world. If you have a Hideout they can contribute Devotion to improve it, though only a twentieth as well as a normal retinue member. They are recruited by the handful every week, less on holidays but more right after, depending entirely on the world's population density and ease of movement.
    <p>You can directly lead any one type of Minions at a time to increase their effectiveness, though you can order them around as needed. To satisfy your Estate, they will be provided with functional and distinct dress codes to adhere to. If you want to be more strict, you can acquire and assign them uniforms if you have the means..</p>
    <p>Now you can always find cheap and disposable labourers sourced from local talent to fill your ranks of Lackeys. While they can fight, they're not as good as decent law enforcement or even most security guards. They're more useful in a general sense, being sufficient to perform errands or gather rumours for you. You can even employ them as Maids, though they may not be as good as dedicated professionals</p>
    <p>These minions and regular retinue members gain the benefits of Talent Sharing in Athletics, Covert and Performance Talents. Your Personality Package will also include behavior patterns in line with how to treat these underlings appropriately, and expand these patterns the more minion types you acquire. You also gain Covert Talent to facilitate any need for discretion, and a copy of Stress Defense.</p>
    `,
  whitelist: ['Eccentric Wealth'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'Tyvqo',
  title: 'Expanded Recruitment Method',
  category: 'Heritage',
  image: 'https://i.imgur.com/5I9NUSKl.jpg',
  cost: 200,
  freebies: {
    defensePerks: [{ title: 'Information Defense', cost: 0, count: 1 }, { title: 'Drain Defense', cost: 0, count: 1 }, { title: 'Mind Defense', cost: 0, count: 1 }, { title: 'Trace Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Have a desire or need for more Minions? You now have a temporary capture method based on your binding technique. Simple, mass deployable, and persistent, anything that could be bound can instead become a Minion under your control. They become the most appropriate of the types you have purchased, and they aren't counted towards your normal limit. However, these methods are all temporary, and can be disabled or countered in various ways, the most obvious being described below. Tier 1 beings are easily captured, while anything with a stronger will becomes progressively more difficult to ensnare, some merely shaking the effect off while others being completely oblivious to it.
    <p>Like normal Bindings, anyone not of the age of maturity can't be affected, so be wary of meddling kids thwarting your plans.</p>
    <p>To protect you from getting caught in your own control system, you gain a copy of Information Defense, Mind Defense, Drain Defense, and Trace Defense. Your Personality Package will gain some example methods and schema to implement these control systems.</p>
    <p><b>Stamp: </b>You may put your Stamp into a specially prepared printing press to create Stickers or temporary Tattoos. As long as your Stamp is in the machine, anyone who applies a Sticker or Tattoo to themselves becomes one of your Minions over the course of three days. The art objects don't wash off, but can easily be yanked off like a decent adhesive bandage. Removing your Stamp from the machine renders the rest of the production run useless, and new one must be started and distributed to recapture or get new Minions.</p>
    <p><b>Stamp, Empty Hand: </b>If you have given up your Stamp for the Empty Hand perk, your only recourse for expanding your Minion pool is through written Contracts and conscious acceptance of them. You may write a Contract that invites someone to work for you and they can accept via signature as long as they understand the terms, though believing the terms isn't necessary. If either party violates part of the Contract, and the other party becomes aware of it they may end the Contract immediately. You may create standard Contracts via a template or printing service, however your actual signature must also be used as part of the agreement.</p>
    <p><b>Tempest Jewelry: </b>You can have imitations of your Tempest Jewelry manufactured by locals and distributed as you see fit. Each artisan requires an inactive article to work from, taking up one of your stocks. Anyone who puts on a manufactured article won't ever consider taking it off, and becomes a Minion over the course of a week. Similar to the normal Tempest Jewelry, this will also increase their libido, self confidence, and feelings of personal attractiveness, though they will always drop below your proper companions in the hierarchy. Removing or damaging the article releases the pseudo-binding, and renders the article useless.</p>
    <p><b>Symbiote: </b> You can milk your King(s) and/or Queen(s) for transformation fluid and dilute it using holistic techniques. This renders it useless for expanding your Swarm, but the resulting mixture can be integrated into topical creams, oils, or soaps for mass distribution. Anyone who uses one of these products becomes a Minion five minutes after a full dose is applied. The products wear off over the course of a couple of days, but the Minions will reapply new doses on their own as long as they are supplied.

    You can direct these extra Minions remotely using the psychic abilities of your Swarm, your control becoming more effective the longer they're under your control. At first they will start with a vague desire to perform tasks that align with your goals, but over time will properly connect to your Swarm and can be communicated with.

    Prolonged use of your product may cause partial transformation or manifestations of traits found in units you have unlocked. Please send any affected Minions to your nearest bio-therapist or Hatchery structure for treatment.</p>
    <p><b>Shroud: </b>You can make thin filaments from your shroud and have them spun into thread. This thread can then be woven into articles of clothing. Ribbons, Neck Ties, Bows, or Hats are the most effective. As long as someone wears the Garment, they are functionally a Minion until they take it off. They may go about their day unaware of this fact and perform tasks you assign them to, and when they remove the Garment later they remain unaware of all of that they did.</p>
    <p><b>Hypnosis App: </b>A mod is added to your Hypnosis App that allows you to project hypnotic Rays out of a Dongle attachment. These Rays can be sent to a specially prepared Broadcaster device that can project them to any available receivers. The farther your Rays' intended reach, and the more receivers you want to effect, the more sophisticated and expensive the Broadcaster becomes to create. The receivers can be local TVs, radios, or your own constructions. People who can perceive the broadcast instantly become near-mindless Minions as long as they are regularly affected. They are highly suggestible to your commands, those of your retinue, and other Minions, in that order. Turning off the hypno Rays mod instantly frees everyone affected, as does damage done to the Dongle or Broadcaster device.</p>
    <p><b>Tantric Arts: </b>You may perform a Ritual as a Spectacle with the intended function of captivating anyone who witnesses it. Those that do become Minions susceptible to simple commands or compulsions embedded in the performance, which wears off when they complete your desired tasks. Unfortunately, these Minions are easy to distract with romantic or sexual encounters, which also dispels the effect when they reach their own completion.</p>
    <p><b>No Bindings: </b>You may attempt to use any of the other Minion creation options listed above, by creating facsimiles of the other binding vectors. You may only attempt to use one at a time and may not use the same method again until you have used three others. If none of these are satisfactory, you may instead invent your own.</p>
    `,
  whitelist: ['Esoteric Toolbox', 'Libertine Service'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'rsHDr',
  title: 'Consorting Associates',
  category: 'Heritage',
  image: 'https://i.imgur.com/kUKW1nCl.jpg',
  cost: 20,
  freebies: {
    talentPerks: [{ title: 'Communication Talent', cost: 0, count: 1 }, { title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Science Talent', cost: 0 }, { flavor: 'Communication Talent', cost: 0 }, { flavor: 'Engineering Talent', cost: 0 }], count: 3 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate develops connections to tech firms, employment groups, and state archives. From these sources you gain a new category of Minions specialized in academics, research, and development, Functionaries. They will mostly help you discover obscure local technologies by datamining patent offices and university grants, but may occasionally come up with new procedures or inventions on their own.
    <p>You can also have them run interference with the processes of the local law and court systems, though this will cut into their research time. This can prevent the bulk of the locals from coming down on you, though this won't prevent some maverick or zealot (or two, or five) from coming after you anyway.
    They also make the hardest working Maids, though not necessarily the most effective.
    </p>
    <p>They and your retinue members benefit from Talent Sharing in Communication, Science, and Engineering. You gain Communication Talent so that you can understand any specific jargon they speak.</p>
    `,
  whitelist: ['Libertine Service'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'dE52O',
  title: 'Thoughts and Prayers',
  category: 'Heritage',
  image: 'https://i.imgur.com/IFqeWGdl.jpg',
  cost: 50,
  freebies: {
    talentPerks: [{ title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Aesthetic Talent', cost: 0 }, { flavor: 'Blessed Talent', cost: 0 }, { flavor: 'Land Talent', cost: 0 }], count: 3 }],
    defensePerks: [{ title: 'Mind Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate uses some minor funds to sponsor special clubs and outcast groups. This allows you to recruit a new type of Minion, Cultists. You may only be aware of one or a few of them at a time, at first, though you'll always be able to find more if you go searching for them.
    <p>These people worship you. They spend most of their time zealously doing so, but occasionally find occult rituals or arcane secrets that you may find use of. They can also be assigned to assist your other minions, multiplying their effectiveness. The presence of Cultists can double the amount of Devotion your minions can provide.</p>
    <p>You may also make use of them as your best looking Maids, though not the most productive.
    They and the rest of your retinue benefit from Talent Sharing in Aesthetic, Blessed talents, and Land. You also gain a copy of Mind Defense to protect you in case they try to show you something mortal minds aren't meant to witness</p>
    `,
  whitelist: ['Libertine Service'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'EHTk6',
  title: 'Fighting Flowers',
  category: 'Heritage',
  image: 'https://i.imgur.com/WUKeoTul.jpg',
  cost: 20,
  freebies: {
    talentPerks: [{ title: 'Martial Talent', cost: 0, count: 1 }, { title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Martial Talent', cost: 0 }, { flavor: 'Wild Talent', cost: 0 }], count: 2 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate is expanded to interact with the more martial elements of the local economy, which lets you recruit Minions that are specifically suited for combat. They are generally as good as fully trained soldiers, and may even be former law enforcement, local combat veterans, disenfranchised criminals, D-list martial artists and sportsmen, or down on their luck mercenaries. These Mooks are fully willing and capable of engaging in combat on your behalf, though despite their apparent skill you may find their performance lacking when you aren't paying attention.
    <p>While Mooks make for effective bodyguards, you'll find them lacking as maids.. Mooks and proper Retinue members get Talent Sharing in the Martial and Wild Talents. You also gain Martial Talent and your Personality Package is updated to include the full training in a martial art based around your Estate, equal to rank a double black belt.</p>
    `,
  whitelist: ['Libertine Service'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'E9OA6',
  title: 'The Lieutenants',
  category: 'Heritage',
  image: 'https://i.imgur.com/HzWOJ3Wl.jpg',
  cost: 50,
  freebies: {
    defensePerks: [{ title: 'Stress Defense', cost: 0, count: 1 }],
    miscPerks: [{ title: 'Sexual Calibration', cost: 0, count: 1 }, { title: 'Fertility Calibration I', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `In lieu of personally leading your Minions, you may instead have a Companion or Familiar take lead. In some ways they can be even more effective than you, but the company can provide these handy personality packages with some extra abilities for them. You also gain a copy of Stress Defense.
    <p>For your Lackeys you may put in charge the Seducer or Seductress, one who can turn your rumour mongering horde into a proper spy network through better subterfuge and applied innuendo. They even gain the benefits of all of your Lures, just in case you need them to go out into the field for a priority target herself. You gain the Sexual Calibration and Fertility Calibration I perks, and some adjustments to your Personality Package to optimize using them.</p>
    <p>If you have Associates, you can put a Secretary in charge of them. They will manage your affairs for you, freeing up your time to pursue other activities. Just be sure to regularly take oral reports to keep abreast of what exactly is popping up in your little fiefdom.</p>
    <p>For your Mooks you may want to assign a Battlemaster, who will provide unparalleled tactical coordination and strategic advantages. They will also take charge of everyone's training regimes and encourage everyone to get more fit.</p>
    <p>The High Priest will observe the rites and ceremonies of your Cultists, to multiply their membership and effectiveness, though be careful that they don't whip them too much up into a frenzy. Their real value is in managing your image to create a cult of personality around you.</p>
    <p>If you want more Elites then you can assign someone to be a Mad Scientist. In addition to pursuing their own research projects (for your own benefits, of course), they will occasionally 'borrow' a Minion from another group and perform some experiments that may make an Elite out of them. It'll work most of the time.</p>
    <p>Of course, this all depends on your picking the right person for the right role. Picking the wrong person for a role can have unintended consequences, so beware.</p>
    `,
  whitelist: ['Libertine Service'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'ECGKX',
  title: 'Monster of the Week',
  category: 'Heritage',
  image: 'https://i.imgur.com/DzYATLyl.jpg',
  cost: 100,
  freebies: {
    talentPerks: [{ title: 'Soul Talent', cost: 0, count: 1 }, { title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Psychic Talent', cost: 0 }, { flavor: 'Soul Talent', cost: 0 }], count: 2 }],
    defensePerks: [{ title: 'Creature Defense', cost: 0, count: 1 }, { title: 'Possession Defense', cost: 0, count: 1 }, { title: 'Corruption Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `Your Estate most definitely does not gain any connections to illegal, unethical research programs. It especially avoids connections to government, corporate, or criminal black sites. Those have nothing to do with your ability to hire a super soldier, or purchase semi-intelligent beasts for a new Minion type. You may have up to a handful of Elites on retainer at a time, however you may only deploy one at a time to the field. Elites work best when directing Mooks as they directly enhance them in minor ways, but can still be effective leading other types. Elites are often at least a Tier better than other Minions at step 3.
    <p>These Minions and your Retinue gain Talent Sharing for the Soul and Psychic Talents. You'll also get Soul Talent for yourself, and one instance of Creature Defense to help you handle the more bestial Elites, as well as Possession Defense and Corruption Defense so that you can better handle the more diabolical types.</p>
    `,
  whitelist: ['Libertine Service', 'Fighting Flowers'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'uuxfY',
  title: 'Enter the Dragon',
  category: 'Heritage',
  image: 'https://i.imgur.com/8kyoovvl.jpg',
  cost: 50,
  freebies: {
    talentPerks: [{ title: 'Athletic Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Body Defense', cost: 0, count: 1 }, { title: 'Creature Defense', cost: 0, count: 1 }, { title: 'Wild Defense', cost: 0, count: 1 }],
  },
  tree: 'Mastermind',
  desc: `If you find yourself at significant risk of personal combat your Personality Package will now contain the skills and abilities to empower yourself and any Companion or Familiar that isn't currently working as a Lieutenant, making them your Champion. New training programs, special equipment, medical therapies, and forbidden rituals are all on the table. Teamwork between you and your Champion will be a priority, allowing the two of you to better facilitate your survival if victory cannot be achieved.
    <p>In addition to an expanded skill package, your Personality Package will be updated to mastery of your Estate's martial art, Athletic Talent, as well as one instance each of Body Defense, Creature Defense, and Wild Defense. This will make you effectively T5 at step 3. Your Champion will also be improved, their strength and powers boosted to a suitable level on step 4. Blue Stars(★) are boosted to T4, while Copper Stars(★) will effectively gain +1 Tier. Silver Stars(★) or higher will only become better at combat if they weren't already masters of that art, but will not be considered of a higher tier.</p>
    `,
  whitelist: ['Artist\'s Lair', 'Monster of the Week'],
})
fullHeritagesDLC.push({
  dlc: 'the_taken',
  dlclink: 'https://docs.google.com/document/d/19B5ReC_Nr-pW4hDNeZiI00j_OuSJGhHhG3fVFS9XPGE/edit#',
  uid: 'sO7pi',
  title: 'Pinnacle of Dominion',
  category: 'Heritage',
  image: 'https://i.imgur.com/d8LHaNMl.jpg',
  cost: 0,
  costT: 1,
  tree: 'Mastermind',
  desc: `Your Estate is now a cornerstone of civilization in whatever world you go to, and you are its icon. Whatever your activities or goals are, they are considered acceptable for an exceptional few privileged. The more time you spend in the spotlight, the more those privileged to follow your path are drawn to join your retinue, while those that aren't become more permissive to your activities with the understanding that it's just the way things are meant to be.
    <p>If you have access to multiple worlds, you can assign a different retinue member to be your Champion and Lieutenant in each. You can even assign a Lieutenant to pull double duty as a Champion. The size of any new Hideouts (or Headquarters) you acquire is tripled.</p>
    <p>As a fundamental part of society, getting rid of you isn't easy. If you are vanquished, as long as you have any Minions remaining in a world you can return to it, and they can also contribute Devotion to reduce the time before your return. As a side effect, your Minions are all boosted +1 Tier at step 5 making them a dominating force</p>
    `,
  whitelist: ['Exemption from Death', 'Expanded Recruitment Method', 'Enter the Dragon'],
})

// Infernal
fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'R8hzH',
  title: 'The Pact is Sealed',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/72/7e/xjLsOKMc_o.png',
  tree: 'Infernal',
  type: 'Root',
  cost: 72,
  freebies: {
    talentPerks: [{ title: 'Everlasting Talent', cost: 0, count: 1 }, { title: 'Body Tune-Up', cost: 0, count: 1 }, { title: 'Soul Talent', cost: 0, count: 1 }, { title: 'Communication Talent', cost: 0, count: 1 }],
  },
  desc: `
<p>You now have the ability to create magical bargains known as Pacts. In a Pact, the Infernal offers a favor, service, knowledge, or aid to a willing Petitioner. According to the principles of exchange, the Petitioner must offer the Infernal something of at least equal value in return. This often manifests as some sort of energy or lifeforce, such as semen, blood, or years of life, or mystical energies such mana, ki, or psionic power. If a Petitioner bargains their soul, the Pact’s completion will count as a capture. Any source of energy offered to the Infernal will count as a free Added Potential for that system of energy.</p>
<p>Those sorts of energies are not the only valid method of payment. Material items of equal importance to the Petitioner are also acceptable, such as custody of a daughter, a life's savings, or even (in Pacts of lesser importance), the cost of a meal. Regardless of what is offered, a sacrifice must be made, and it must be made by the Petitioner. They cannot have someone else sacrifice on their behalf.</p>
<p>The use of Pact Magic will manifest a Sigil, a design that matches the core of the Stamp. This manifestation may appear as a magic circle, a glowing tattoo on the Infernal’s hand to be shaken, on a contract to be signed, or other possibilities. Regardless of the Sigil’s form, the potential Petitioner must physically interact with the Sigil and agree to the Pact in order to confirm it as Sealed.</p>
<p>The Infernal will feel compelled to see their sealed Pacts to their completion, and unable to break any of the clauses they agreed to. When the Infernal completes the pact, the Petitioner will then be compelled to uphold their end of the bargain.</p>
<p>Additionally, as an Infernal, your body is now made for sin. Take Everlasting, Communication, and Soul Talents and Body Tune-Up for free. Concentrated infernal energies from your Pacts - Pact Energy - enhance the beauty and strength, speed, and durability of your body. The traits most enhanced are always related to the Infernal’s greatest talents. Those who look upon the Infernal are drawn to seek them out. The Infernal may now manifest demonic horns, wings, and tail whenever they wish. This perk immediately raises a contractor’s effective tier at step 1b to 5.</p>
<p>If you possess Tantric Arts, each active Pact will count as an Arcane Link to the Target.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 's99U7',
  title: 'At the Crossroads',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/a7/9f/txdpPq4h_o.png',
  tree: 'Infernal',
  type: 'Party',
  cost: 70,
  freebies: {
    talentPerks: [{ title: 'Aesthetic Talent', cost: 0, count: 1 }, { title: 'Blessed Talent', cost: 0, count: 1 }],
  },
  whitelist: ['The Pact is Sealed'],
  desc: `
<p>The Infernal giveth, and the Infernal taketh away. The Infernal gains the ability to give Petitioners power and abilities the Infernal possesses. This power can be bargained away completely to the Petitioner, partially granted (allowing the Infernal to largely retain the power, while giving the Petitioner a path to walk upon), or simply loaned for a set duration - whether a fixed time limit or until a condition is met.</p>
<p>All powers bargained away benefit from the Infernal's talents, as if the Infernal was still using it. If the power is reclaimed, the Infernal will benefit from any and all breakthroughs, discoveries, or skills the Petitioner made while using said power. If the Petitioner dies while still retaining an Infernal’s power, it will automatically revert to the Infernal.</p>
<p>Take Aesthetic and Blessed Talents for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'LcHed',
  title: 'Siphoned Strength',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/ca/9c/nvsYzJeu_o.png',
  tree: 'Infernal',
  type: 'Self',
  cost: 70,
  freebies: {
    defensePerks: [{ title: 'Drain Defense', cost: 0, count: 2 }],
  },
  whitelist: ['The Pact is Sealed'],
  desc: `
<p>The Infernal's mastery over pact magic has expanded. Where only the Pact stood beforehand, now you can offer more; offer the strength your arms could've exerted for a fortnight in exchange of being able to topple a mountain, offer the memories of a lullaby in exchange of casting down your enemies through magic and might. You may accept anything as payment, as long as it belongs to the petitioner and has inherent value. You could bargain for their physical strength, sapping it away temporarily or permanently. You could arrange to call upon their strength once a week, borrowing it for a period of time before giving it back. You aren’t limited to physical capabilities. You can bargain for beauty, charisma, creativity, love, their mortal vessel for you to possess or control as you please, etc. As long as they have it, you can accept it as payment. Additionally, you may use previous payments as offerings in future bargains.</p>
<p>When a pact is completed, the Infernal gains a small boost to abilities tied to the task performed and the payment given. A powerful wizard offering mana to the Infernal for aid in a magical ritual may give the Infernal knowledge of a spell or two of theirs. A scholar offering lifeforce, for assistance in opening the way to a forgotten tomb, may additionally transfer an ancient secret that the scholar had previously uncovered. A warrior offering his strength in return for aid in charming a fellow fighter, may also impart some of his skill with the sword. Perhaps the Infernal was tasked with cursing the beauty of a Petitioner’s hated rival, and in return the Infernal’s beauty blossoms into greater heights.</p>
<p>These small boosts do not steal from the Petitioner. They are merely caused by the Infernal's increased affinity with their pact magic, not added costs of the Pacts themselves. If you use Power Swap on a retinue member who's powers you've siphoned, you lose those powers as well. Finally, take two copies of Drain Defense for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'fevKC',
  title: 'Your Word, My Bond',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/df/60/sMgEwgu3_o.png',
  tree: 'Infernal',
  type: 'Self',
  cost: 80,
  freebies: {
    talentPerks: [{ title: 'Covert Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Paradox Defense', cost: 0, count: 1 }],
  },
  whitelist: ['Siphoned Strength'],
  desc: `
<p>A Petitioner must mind their tongue around the Infernal, lest it be used against them. The compulsion effect of the Pact will now go both ways. A Pact to improve the Petitioner’s strength might not only compel the Infernal to aid them, but also compel the Petitioner to work hard to attain said strength - regardless of what they may desire.</p>
<p>Additionally, the Infernal is now able to weave pact magic into their very words. Informal agreement is now enough to confirm a Pact, no longer just explicit consent. Depending on the strength of the pact magic involved and the intent of the Infernal themselves, this could be a minor unnoticed drive to watching in horror as their body obeys someone else's will over their own. If you have Paper Trail, Pacts can even be buried in terms and conditions, license agreements, and other legal documents, ready to be sprung on anyone who skims through or thinks it’s just a joke.</p>
<p>Finally, take Covert Talent and one copy of Paradox Defense for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'HYXqo',
  title: 'The Lost and the Damned',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/97/1f/TzdjUWvv_o.png',
  tree: 'Infernal',
  type: 'Other Control',
  cost: 150,
  freebies: {
    defensePerks: [{ title: 'Possession Defense', cost: 0, count: 2 }, { title: 'Mind Defense', cost: 0, count: 1 }, { title: 'Fatality Defense', cost: 0, count: 1 }],
  },
  whitelist: ['Siphoned Strength', 'At the Crossroads'],
  desc: `
<p>The Infernal’s grasp of soul manipulation via pact magic has increased, allowing the choice to take fragments of the Petitioner’s soul instead of the normal power boost from completed Pacts. Gathering enough fragments can allow the Infernal to wrench the soul from the Petitioner’s body. While capturing a soul is normally enough to count as a Capture for accounting purposes, further steps will be required when a soul is wrenched in this manner - see below. If the Petitioner lacks a soul by traditional definitions, this ability will still work and create a soul for the Petitioner in the process.</p>
<p>Once you have a Petitioner’s soul, you can choose to twist the soul into one of the Damned. When the soul is transformed into a Damned, the Infernal gains the majority of their original powers and abilities as long as they remain in that state. The Damned will retain their core abilities, albeit in a greatly diminished state. The physical appearance of an Infernal’s Damned is the Infernal’s choice and consistent across all of their Damned. They might resemble traditional red-skinned imps, explosive penguins, or any number of other (usually humiliating) forms.</p>
<p>The newly Damned is then given a task which will allow them to regain their ransomed soul. At that time, a demi-tattoo will appear on the Damned if it is not already bound. The task must be theoretically completable; impossible tasks will not bind the Damned to a new form. If no task is given, the soul ceases to be one of the Damned, returning to its normal state. The Damned are unable to form or agree to any Pact as long as they remain Damned. Upon success or permanent failure of the task, a Damned will be Captured and the appropriate value transferred to your account.</p>
<p>If a Damned succeeds, they will regain their body in full. Additionally, they are now able to manifest their Damned form as a henshin state or second body whenever they wish. If both bodies are active, the ex-Damned may struggle to maintain their focus or be overwhelmed by sensation without sufficient willpower and practice. If a Damned fails their task and the task is no longer possible, the Damned will instead devolve into a demonic form and lose their higher functions, becoming little more than a monster.</p>
<p>While a Damned remains in that state, their original body is under the Infernal’s control. It might be possessed by the Infernal or a subject, or ordered like a puppet.</p>
<p>The souls of anyone slain in the Infernal’s Demiplane, Stronghold, or Sanctuary automatically go to the Infernal. These “Lost” are mechanically identical to the Damned in all respects. If you possess Golden Idol, you may bind the Damned to a piece of tempest jewelry. However, the task given must be accomplishable by the Lost or Damned while trapped within the Tempest jewelry. Finally, take two copies of Possession Defense and one each of Mind and Fatality Defenses for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'Rog7s',
  title: 'Serpent’s Kiss',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/51/90/KWNGBD3d_o.png',
  tree: 'Infernal',
  type: 'Self',
  cost: 66,
  complex: 'flavor',
  anything: 'Sin',
  freebies: {
    defensePerks: [{ title: 'Stress Defense', cost: 0, count: 2 }, { title: 'Addiction Defense', cost: 0, count: 2 }],
  },
  whitelist: ['The Pact is Sealed'],
  desc: `
<p>The Infernal gains an affinity for one of the Seven Deadly Sins: Lust, Gluttony, Avarice, Sloth, Wrath, Envy, or Pride. This is an innate connection with the respective Sin. You can sense the desires of nearby individuals relating to your sin and have an intuitive understanding of what buttons you need to press to drive anyone towards it. In a manner similar to completing a pact, you can draw strength from your sin when others succumb to it. These abilities are greatly enhanced when used against particularly devout individuals.</p>
<p>Acting in accordance with your Sin, regardless of the intended outcome, will greatly amplify your physical, mental, and metaphysical strength, as well as speed, resilience, and stamina, for the duration and a short time afterward. This is a use of pact magic.</p>
<p>Finally, take two copies each of Stress and Addiction Defenses for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'lQnq9',
  title: 'Fel Influence',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/a5/f9/6fu9gxSk_o.png',
  tree: 'Infernal',
  type: 'Lure',
  cost: 127,
  freebies: {
    talentPerks: [{ title: 'Land Talent', cost: 0, count: 1 }],
    defensePerks: [{ title: 'Wyldscape Defense', cost: 0, count: 1 }],
  },
  whitelist: ['Serpent’s Kiss'],
  additionalDesc: `
  <ul class="list-disc list-inside">
    <li>0-25: Individuals related to your sin are drawn to these grounds and more likely to express their sin while present. Those with strong desires, filled with desperation, or simply those with idle hands are more susceptible, regardless of their sin.</li>
    <li>26-50: Anyone near Influenced grounds are now drawn towards them. Those related to your sin feel the call more. Once inside they will have their desires inflamed. Those who indulge within gain the knowledge to summon the Infernal in Influenced grounds. This summoning can be a blood sacrifice, chanting a name or title associated with the Infernal, drawing their Sigil, or other methods of the Infernal’s design. The Infernal is the ultimate arbiter on whether or not they wish to accept this summoning.</li>
    <li>51-75: Anyone in your Influenced ground will feel an active temptation toward their sin,  as well as a desire to return to areas under your influence.</li>
    <li>76-99: You can now directly whisper to those whom you’ve completed Pacts with, whenever they are in Influenced grounds. Anyone in your Influenced grounds will gain the knowledge to summon the Infernal in Influenced areas.</li>
    <li>100-665: The longer an individual is in Influenced grounds the more they are corrupted towards the Infernal’s sin. Influenced grounds count as Company provided space. You may treat it as either your Sanctuary or Home Stronghold.</li>
    <li>666+: Influenced grounds may now be dragged into your Demiplane/Stronghold/Sanctuary . You may return them to their previous location at any time.</li>
  </ul> `,
  desc: `
<p>Completed Pacts now leave a mark on the local environment. The more Pacts completed in a location, the greater the effect. Whenever you complete a Pact with a Petitioner, the petitioner’s tier is added onto your Influence of an area. This follows a linear scale during the regular tiers: Tier 2 gives 2 influence, Tier 5 gives 5, and Tier 10 gives 10. For imaginary tiers, this is doubled with each step: Tier X gives 20 influence and Tier Z gives 80. Pacts made within your retinue do not add any Influence. You may gain influence from the same petitioner no more than once per week.</p>
<p>When your influence reaches certain benchmarks, the infused area will affect those present at the site. The benefits of Influence are cumulative and you retain any benefits from the lower Influence levels. Beings of sufficient virtue and willpower can resist these effects, for a time.</p>
<p>Influence gathers at landmarks or points of interest and cannot exceed a radius of 1.6 km. For example, you may gather Influence over a burned clearing in a forest, but the number of landmarks needed to turn an entire forest into influenced grounds makes such a task near impossible Additionally Pacts made online or in cyberspace influence that area online. If it is done on an online server that server itself is influenced. Your Demiplane, Stronghold, or Sanctuary and other company spaces are always at Influence 100.</p>
<p>Finally, take Land Talent and one copy of Wyldscape Defense for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'ERCbU',
  title: 'Sinforged Visage',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/f1/97/kuBLwnYy_o.png',
  tree: 'Infernal',
  type: 'Self',
  cost: 125,
  freebies: {
    defensePerks: [{ title: 'Corruption Defense', cost: 0, count: 2 }],
  },
  whitelist: ['Fel Influence'],
  desc: `
<p>Your pact magic has fully infused your being. Your demonic powers have flowered into your Infernal Visage and you can also wield your Sin as a conceptual element. A visage is an Infernal’s warform that the Infernal can assume at any time. This form is always visibly inhuman, supernatural, and demonic, but cannot increase or decrease the Infernal’s overall size by more than a factor of 3.</p>
<p>Take two copies of Corruption Defense for free. This perk immediately raises a contractor’s effective tier at step 1b to 7.</p>
<p>A visage’s traits depend heavily on both the Sin and the Infernal’s own person. A Lust-aligned visage may be an amazonian succubus, with great wings and an entrancing gaze, or a writhing mass of tentacles on a humanoid form whose appearance shifts based on the observer in question. A Wrath-aligned visage may be a molten giant with curled horns and burning breath, while a Sloth-aligned visage may be a walking fogbank whose presence drives all nearby to slumber.</p>
<p>Additionally, simply being nearby those indulging in that Sin, including areas under your Influence, empowers your physical, mental, and metaphysical strength, as well as speed, resilience, and stamina, just as it does when you channel them directly. This effect is doubled when you draw upon the Sins of current or former Petitioners.</p>
<p>If you have a Love Spot, it now applies to your entire body at all times. (To avoid a need for total concealment with Your Wings Are Beautiful, that perk allows you to toggle this added effect on the rest of your body.) In addition to the normal effects of Love Spot, you may now induce infatuation or dread, or amplify your chosen sin within those who gaze upon you. The original Spot you picked is also twice as effective.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'uTAsB',
  title: 'Multi-Leveled Malevolence',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/a6/75/tzt8GlJB_o.png',
  tree: 'Infernal',
  type: 'Other Control, Party',
  cost: 175,
  freebies: {
    talentPerks: [{ title: 'Administrative Talent', cost: 0, count: 1 }, { title: 'Talent Sharing', cost: 0, complex: [{ flavor: 'Communication', cost: 0 }], count: 1 }],
    defensePerks: [{ title: 'Polymorph Defense', cost: 0, count: 1 }],
  },
  whitelist: ['Sinforged Visage', 'At the Crossroads'],
  desc: `
<p>The Infernal is now able to imbue individuals, Witches, with the ability to use pact magic on their own. These Witches are immediately captured if they are not already part of your retinue. Upon completing pacts, Witches will begin to store said pact energy within themselves, giving them access to the benefits from The Pact is Sealed and Serpent’s Kiss while also developing a nascent Sin, according to their personality. The greater a Witch’s store of pact energy, the more their body changes to reflect both the Sin and the Infernal's tastes and desires, and the more likely they will be overcome by their Sin in times of high emotion.</p>
<p>Greater amounts of pact energy absorbed also determine how powerful and empowered the Witch will be when turned into an Infernal. Under an Infernal’s direct guidance, the Witch develops their Visage, taking elements and aesthetics of not only their Sin but also their master, similar to how a child takes features from their parents. Upon completion, the newly-minted Infernal joins their master’s Coven, unless it is already full, in which case they become an Acolyte instead.</p>
<p>A Coven is a group of 13 subordinates tied in service to an Infernal. Once a Coven is filled, the commanding Infernal can no longer recruit more Infernals to their Coven, but may still act as a guide for future Witches. The Infernal at the head of a Coven gains access to the Sins of each member, as well as the ability to quickly learn the skills of their Coven. Treat this learning as an additional talent specifically for what the Coven knows.</p>
<p>Guiding a Witch into Infernalhood is not the only way to add members to a Coven. Infernals can seduce and dominate other Infernals into their Coven through Pacts and other manipulations. If the new Coven member joins willingly, the hierarchy of Infernals below them will remain intact, so that the only difference is their master’s new master. There are no inherent effects to enforce the loyalty, affection, or other attitudes of a willingly-joined Coven member toward their master, nor can any Infernals directly above oneself be usurped in this way.</p>
<p>Forcible subjugation, however, will disrupt the inducted Infernal’s command over their Coven, shattering the lower hierarchy. The released Infernals are now Acolytes of their former master’s master, free to form new Covens or ascend to the opening left behind by their former master. The same applies if an Infernal is slain. Forcible subjugation will also ensure the target’s loyalty to their new master for the next 666 days (15,984 hours) or about 95 weeks. No matter how vindictively their new master treats them, they will not even be able to consider rebellion until that time has passed. Unlike seduction, this method can be used to usurp one’s own master and directly ascend in an Infernal hierarchy.</p>
<p>All Pacts made by a Witch or Infernal will count towards Influence for the master at the top of the retinue, not the individual subjects, and they all benefit from Influence in influenced grounds. Any Infernal who has subordinates will naturally siphon some pact energy Witches, more from Coven members, and less from Acolytes.</p>
<p>As the contractor, your subject Infernals will benefit from any perk that expands what pact magic can achieve, such as Siphoned Strength or Your Word, My Bond.</p>
<p>Finally, take Administrative Talent, one copy of Polymorph Defense, and Talent Sharing (Communication) for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'wN3Ic',
  title: 'Speak of the Devil, and He Shall Appear',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/46/9d/Ndvx04j4_o.png',
  tree: 'Infernal',
  type: 'Self, Party',
  cost: 65,
  freebies: {
    defensePerks: [{ title: 'Wyldscape Defense', cost: 0, count: 1 }],
  },
  whitelist: ['Multi-Leveled Malevolence'],
  desc: `
<p>An Infernal’s grasp extends far past their vision. Areas sufficiently infused with pact energy are now able to link up with metaphysically resonant locations. For example, a pact-infused university may resonate with another university. Additionally, locations sufficiently tied and infused with your sin will function as if they were infused with your pact energy, giving all the same benefits - including resonate connections. These locations always start at 11 Influence. Any Infernal within your retinue can now teleport to grounds with at least 40 influence. Additionally, whenever an Infernal’s name within your retinue is spoken in influenced grounds, they may treat that as a summon for the purposes of teleporting there. This works in any ground of at least 10 influence.</p>
<p>With this perk, you can extend your influence to any resonant location, or location associated with your sin, within your local multiverse and any previously-visited universes. Additionally, you can attempt to connect to new worlds outside of the local multiverse. The first connection to a new setting starts at 61 influence. However, you will not be able to travel there, nor will you know where it is until a potential Petitioner summons you or one of your retinue for a Pact.</p>
<p>The Infernal gains a list of titles to bestow upon their coven. These titles, one per sin, greatly enhance that peerage member’s mastery and power over their sin, granting them immense power and mastery compared to their peers. If the coven member’s personal sin matches the title they hold, the effect of that title is maximized. If the two sins do not match, the title bearer will be able to treat the title’s sin as if it was their primary sin, but the power of the title will be split between the bearer and their own coven member with the same title. The available titles are listed with their sins.</p>
<p>Finally, take one copy of Wyldscape Defense for free.</p> `,
})

fullHeritagesDLC.push({
  dlc: 'Unstable',
  dlclink: 'https://docs.google.com/document/d/1ILzH_MYYTsS40Dx4YnnqbGiFaHiqVRZD-yJBEz4CnEg/edit?tab=t.0#heading=h.kcb0rbvk39ax',
  uid: 'zZ5k3',
  title: 'Ave Satanas',
  category: 'Heritage',
  image: 'https://images2.imgbox.com/13/2f/09ZHTXWV_o.png',
  tree: 'Infernal',
  type: 'Self',
  cost: 0,
  costT: 1,
  whitelist: ['Speak of the Devil, and He Shall Appear'],
  desc: `
<p>The Infernal’s influence can no longer be contained. Influenced grounds can now grow indefinitely. Whenever an individual sins in influenced grounds, the grounds expand slightly. The greater concentration of sinners indulging, the faster the influence spreads. An Infernal may treat any area in their local universe that’s suffused with their sin in the local universe as Influence 71, regardless of how much Influence is actually present.</p>
<p>Whenever your name is spoken, you are aware of who spoke it and where they did it. You may also treat that as a summoning. It must be your name specifically that is spoken. The identical name of a stranger will not work, but a pseudonym or title that you chose for yourself will. These effects only trigger for speakers of Tier 10 or below.
Finally, whenever you complete a pact with a petitioner, the resulting Influence gain is now 3x the petitioner’s tier.</p> `,
})

// Phoenix
// fullHeritagesDLC.push({
//  dlc: 'Unstable',
//   dlclink: 'https://docs.google.com/document/d/1XtvFKeu2X_AX6q0GdBpgXCTqsT7rpvmWpsjlOaUiaHI',
//   uid: 'Phx',
//   title: 'Ignition',
//   category: 'Heritage',
//   image: '',
//   tree: 'Phoenix',
//   type: 'Root',
//   cost: 60,
//   freebies: {
//     talentPerks: [{ title: 'Body Tune-Up', cost: 0, count: 1 }, { title: 'Body Tune-Up', cost: 0, count: 1 }, { title: 'Soul Talent', cost: 0, count: 1 }, { title: 'Communication Talent', cost: 0, count: 1 }],
//     defensePerks: [{ title: 'Body Defense', cost: 0, count: 2 }],
// },
//   desc: `
// <p>An ember has been ignited inside your soul. You have taken the first step into becoming a Phoenix, a creature of Change, Rebirth, and Cycles. Take Body Tune-Up, Athletic Talent, Soul Talent, Communication Talent,  and 2 copies of Body Defense for free. This perk immediately raises a contractor’s effective tier at step 1b to 5.</p>
// <p>You now have the ability to use Flame, the energy of your personal embodiment and the power that fuels your abilities as a Phoenix. For now this is expressed as literal fire, but this may change depending on how you develop later. You can use your Flame to form ethereal bird wings that let you fly, or wreath yourself in it as a protective barrier that burns those that get close and protects you from the elements. You can also release your Flame as a torrent of fire. Practice with your Flame will improve your control of it, allowing you to manipulate it in different ways.</p>
// <p>The use of Pact Magic will manifest a Sigil, a design that matches the core of the Stamp. This manifestation may appear as a magic circle, a glowing tattoo on the Infernal’s hand to be shaken, on a contract to be signed, or other possibilities. Regardless of the Sigil’s form, the potential Petitioner must physically interact with the Sigil and agree to the Pact in order to confirm it as Sealed.</p>
// <p>Your Flame can be turned inward to improve your healing ability. You can stop bleeding nearly instantly and you heal damage to your body at your Tier times your normal rate, though regrowing lost limbs is beyond you.</p>
// <p>Even when you are not actively using your Flame, your soul is radiant enough to affect those around you, drawing on emotions. You gain the empathic ability to sense the emotions of those around you, as well as more directly influence other people’s emotions with your actions. You cannot simply will another person to feel what you feel, but an impassioned speech from you will rouse the hearts of even the most cynical. Those impassioned by you will be resistant to falling to depression, fear, or stress for several hours.</p>
// <p>Finally, your body has been enhanced to give you the Grace of a Phoenix, giving you near perfect kinesthesis.</p> `,
// })
