import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Forgeries and Networks",
  description: "Website of the ForNet project",
  base: "/ForNetWeb/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'About the project', link: '/about-the-project' },
          { text: 'Team', link: '/team' },
          { text: 'Project partners', link: '/project_partners' },
          { text: 'Links', link: '/links' },
          { text: 'Zotero library', link: '/zotero' }
        ]
      }
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 
          <img src="docs/logo_IEG/IEG_Logo_Vektorgrafik_mit-Schriftzug_Leibniz.jpg" alt="ForNet Logo">
        'Released under the MIT License.',
      copyright: 'Copyright © 2023 Forgeries and Networks'
    }
  }
});
