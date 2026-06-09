import DefaultTheme from 'vitepress/theme'

import InteractiveSvg from './components/InteractiveSvg.vue'
import InteractiveGraph from './components/InteractiveGraph.vue'
import CytoscapeGraph from './components/CytoscapeGraph.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('InteractiveSvg', InteractiveSvg)
    app.component('InteractiveGraph', InteractiveGraph)
    app.component('CytoscapeGraph', CytoscapeGraph)
  }
}
