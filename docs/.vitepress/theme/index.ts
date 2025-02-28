import DefaultTheme from 'vitepress/theme';
import Footer from './components/Footer.vue';
import type { Theme } from 'vitepress';

export default {
  ...DefaultTheme, // Extend the default theme
  enhanceApp({ app }) {
    app.component('Footer', Footer); // Register the Footer component globally
  },
} as Theme;
