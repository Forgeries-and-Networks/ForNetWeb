<template>
  <div class="cytoscape-graph" ref="root" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import cytoscape from 'cytoscape'
  import {delay} from '../util'

  const layout = {
    name: 'cose',
    nodeDimensionsIncludeLabels: true,
    randomize: true,
    // componentSpacing: 280,
    nodeRepulsion: (node) => 2048 * 50000,
    // edgeElasticity: (edge) => 32,
    // nodeOverlap: 180
  }

  let root = ref(null)

  const props = defineProps({
    url: {type: String}
  })

  onMounted(async () => {
    const element = root.value
    let changed = false
    const data = await fetch(props.url).then(r => r.json())
    let cyData = []

    for (const node of data[0]['nodes']) {
      cyData.push({
        group: 'nodes',
        data: {
          id: node['identity'],
          label: node['labels'][0]
        }
      })
    }

    for (const rel of data[0]['relationships']) {
      const s = rel['start']
      const e = rel['end']

      cyData.push({
        group: 'edges',
        data: {
          id: rel['identity'],
          label: rel['properties']['name'],
          source: s,
          target: e
        }
      })
    }

    const cy = cytoscape({
      container: element,
      elements: cyData,
      minZoom: 0.5,
      maxZoom: 5,
      wheelSensitivity: 4,
      boxSelectionEnabled: false,
      autounselectify: true,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'font-size': '6px',
            width: 'label',
            height: 'label',
            padding: '5px',
            'background-color': '#1e1e1e',
            'background-opacity': 0.75,
            shape: 'round-rectangle',
            'aspect-ratio': '1 / 1',
            'font-weight': 700,
            cursor: 'pointer',
            'text-valign': 'center',
            'text-halign': 'center',
            color: 'white'
          }
        },
        {
          selector: 'edge',
          style: {
            label: 'data(label)',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.4,
            'target-arrow-fill': 'orange',
            'font-size': '6px',
            'line-color': 'orange',
            'text-opacity': 0.75,
            width: 0.5,
            cursor: 'default'
          }
        }
      ],
      layout
    })

    cy.on('dragfree', 'node', event => {
      changed = true
    })

    const reLayout = () => {
      if (!changed) return

      changed = false
      cy.layout(layout).run()
    }

    const reset = delay(reLayout, 1000)

    element.parentElement.addEventListener('mouseleave', reset)
    element.parentElement.addEventListener('mouseenter', reset.cancel)
  })
</script>
