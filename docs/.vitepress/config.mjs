import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Farming And Friends Wiki',
  description: 'A comprehensive wiki for Farming And Friends',
  base: '/Farming-And-Friend-Unofficial-WIKI/',
  themeConfig: {
     nav: [
      { text: 'Home', link: '/' },
      { text: 'Main Wiki', link: '/Main/Main/main' }
    ],
    sidebar: {
      '/Main/': [
        { text: 'Main Wiki', link: '/Main/Main/main' },
        { text: 'Beginners Guide', link: '/Main/beginners-guide/getting-started' },
        { text: 'Events', link: '/Main/Event/main' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/example/farming-and-friends-wiki' }
    ]
  },
  head: [
    ['style', {}, `
      .menu-button {
        display: inline-block;
        padding: 12px 24px;
        background-color: rgb(61, 60, 60);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        margin: 8px 4px;
        font-weight: bold;
        transition: background-color 0.3s;
      }
      .menu-button:hover {
        background-color: rgb(61, 60, 60);
      }
    `]
  ]
})
