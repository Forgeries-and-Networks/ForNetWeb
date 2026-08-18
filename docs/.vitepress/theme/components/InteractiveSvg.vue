<template>
  <div class="interactive-svg">
    <div
      class="image"
      v-html="svg"
      ref="root"
    ></div>
  </div>
</template>

<script setup>
  import { onMounted, onBeforeMount, ref } from 'vue'
  import * as pz from '@panzoom/panzoom'
  import {delay} from '../util'

  let svg = ref(null)
  let root = ref(null)
  const Panzoom = pz.default

  const props = defineProps({
    url: {type: String},
    startX: {type: Number, default: 0},
    startY: {type: Number, default: 0},
    startScale: {type: Number, default: 1}
  })

  onBeforeMount(async () => {
    svg.value = await fetch(props.url).then(r => r.text())
  })

  onMounted(() => {
    const element = root.value

    const panzoom = Panzoom(element, {
      maxScale: 10,
      minScale: props.startScale,
      step: 2,
      animate: true,
      duration: 200,
      easing: 'ease-out',
      startX: props.startX,
      startY: props.startY,
      startScale: props.startScale
    })

    const reset = delay(event => panzoom.reset(), 1000)

    element.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    element.parentElement.addEventListener('mouseleave', reset)
    element.parentElement.addEventListener('mouseenter', reset.cancel)
  })
</script>
