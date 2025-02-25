import DefaultTheme from 'vitepress/theme'
import CustomFooter from './components/CustomFooter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
  }
}
