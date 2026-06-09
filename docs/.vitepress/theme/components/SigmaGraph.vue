<template>
  <div class="sigma-graph" ref="root" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import {MultiDirectedGraph as Graph} from "graphology"
  import {circular} from 'graphology-layout'

  import {delay} from '../util'

  let data = null
  let root = ref(null)

  const props = defineProps({
    url: {type: String}
  })

  onMounted(async () => {
    const { default: Sigma } = await import('sigma')

    const element = root.value
    data = await fetch(props.url).then(r => r.json())

    const graph = new Graph()

    for (const node of data[0]['nodes']) {
      graph.addNode(node['identity'], {
        label: node['labels'][0],
        size: 10
      })
    }

    for (const rel of data[0]['relationships']) {
      graph.addEdge(rel['start'], rel['end'], {
        label: rel['properties']['name'],
        size: 2,
        type: 'arrow',
        color: '#1e1e1e55',
        forceLabel: true
      })
    }

    circular.assign(graph)

    window.graph = graph

    const sigma = new Sigma(graph, element, {
      labelSize: 12,
      renderEdgeLabels: true
    })
  })
</script>
