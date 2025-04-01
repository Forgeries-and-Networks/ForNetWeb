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
       message: `
        <a 
          href="https://www.uni-heidelberg.de/fakultaeten/philosophie/zegk/iek/index.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          style="display: inline-block; vertical-align: middle; margin-right: 50px;"
        >
          <img 
            src="/ForNetWeb/logos/hd_logo_small_16cm_rgb.png" 
            alt="Logo HD" 
            style="max-width: 160px; height: auto; display: block;"
          >
        </a>
        <a 
          href="https://www.ieg-mainz.de/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style="display: inline-block; vertical-align: middle;" 
        >
          <img 
            src="/ForNetWeb/logos/IEG_Logo_Vektorgrafik_mit-Schriftzug_Querformat.png" 
            alt="Logo IEG" 
            style="max-width: 160px; height: auto; display: block;" 
          >
        </a>
        <div style="margin-top: 10px;">Released under the MIT License.</div> 
      `,
      copyright: 'Copyright © 2023 Forgeries and Networks'
}
}
  }
);
