import DefaultTheme from 'vitepress/theme'

import InteractiveSvg from './components/InteractiveSvg.vue'
import SigmaGraph from './components/SigmaGraph.vue'
import CytoscapeGraph from './components/CytoscapeGraph.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('InteractiveSvg', InteractiveSvg)
    app.component('SigmaGraph', SigmaGraph)
    app.component('CytoscapeGraph', CytoscapeGraph)
  }
}
