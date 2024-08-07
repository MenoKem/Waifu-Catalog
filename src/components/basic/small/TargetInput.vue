<template>
  <div class="flex flex-col select-none">
    <div class="flex items-center rounded border border-gray-700 bg-gray-100 dark:(bg-warm-gray-600 border-warm-gray-500)" @click="showTippy">
      <input
        id="anything"
        ref="tippyEl"
        v-model="value"
        type="text"
        :placeholder="placeholder"
        class="rounded-l dark:bg-warm-gray-700 px-2 w-full cursor-pointer"
        outline="none active:none"
        autocomplete="off"
        readonly
      />
      <div class="flex items-center hover:text-gray-500 text-gray-800 dark:text-gray-200 cursor-pointer">
        <bx:bxs-chevron-up v-if="tippyShown" />
        <bx:bxs-chevron-down v-else />
      </div>
      <div ref="listEl" hidden class="scrollbar max-h-[300px] overflow-y-auto">
        <div
          v-for="item in targetListwithUID"
          :key="item.uid"
          class="hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer px-2 text-base flex gap-4 justify-between w-full"
          @click="(e) => chooseItem(e, item)"
        >
          {{ item.name }}
          <fa-solid:check v-if="findIndex(boughtList, (item.uid ? { uid: item.uid } : { target: item.name })) !== -1" class="text-green-500" />
        </div>
      </div>
    </div>
    <div v-if="errorMessage" class="text-sm text-red-600 dark:text-red-300">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { PropType } from '@vue/runtime-core'
import { findIndex } from 'lodash-es'
import tippy from 'tippy.js'
import { useStore } from '~/store/store'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  boughtList: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  },
  doNotCloseList: {
    type: Boolean,
    default: false,
  },
})

const { targetListwithUID } = useStore()

const emit = defineEmits(['targetChange'])

const listEl = ref<HTMLElement|null>(null)
const tippyEl = ref<HTMLElement|null>(null)

const tippyShown = ref(false)

const value = ref('')

let tippyInst: any = null

onMounted(() => {
  if (tippyEl.value && listEl.value) {
    tippyInst = tippy(tippyEl.value, {
      content: listEl.value,
      allowHTML: true,
      trigger: 'manual',
      arrow: false,
      interactive: true,
      offset: [0, 0],
      placement: 'bottom-start',
      theme: 'light',
    })
  }
})

function showTippy() {
  if (listEl.value) {
    if (tippyShown.value) {
      tippyShown.value = false
      listEl.value.hidden = true
      tippyInst.hide()
    }
    else {
      tippyShown.value = true
      listEl.value.hidden = false
      tippyInst.show()
    }
  }
}

function chooseItem(e: Event, item: {name: string; uid: number}) {
  if (props.doNotCloseList)
    e.stopPropagation()
  value.value = item.name
  emit('targetChange', item)
}

</script>
