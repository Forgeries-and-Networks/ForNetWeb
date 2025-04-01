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
        <img 
          src="/ForNetWeb/logos/hd_logo_small_16cm_rgb.png" 
          alt="Logo HD" 
          style="max-width: 160px; height: auto; display: inline-block; vertical-align: middle; margin-right: 20px;"
        >
        <img 
          src="/ForNetWeb/logos/IEG_Logo_Vektorgrafik_mit-Schriftzug_Querformat.svg" 
          alt="Logo IEG" 
          style="max-width: 160px; height: auto; display: inline-block; vertical-align: middle;"
        >
        <div style="margin-top: 10px;">Released under the MIT License.</div> 
      `, // Zurück zum Template Literal, da es lesbarer ist. Prüfe die Pfade!
      copyright: 'Copyright © 2023 Forgeries and Networks'
}
}
  }
);
