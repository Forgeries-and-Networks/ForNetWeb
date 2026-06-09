import DefaultTheme from 'vitepress/theme'

import CytoscapeGraph from './components/CytoscapeGraph.vue'
import InteractiveSvg from './components/InteractiveSvg.vue'
import PropertyList from './components/PropertyList.vue'
import SigmaGraph from './components/SigmaGraph.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CytoscapeGraph', CytoscapeGraph)
    app.component('InteractiveSvg', InteractiveSvg)
    app.component('PropertyList', PropertyList)
    app.component('SigmaGraph', SigmaGraph)
  }
}
