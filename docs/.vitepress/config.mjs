import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Farming And Friends Wiki',
  description: 'A comprehensive wiki for Farming And Friends',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Beginners Guide',
          items: [
            { text: 'Overview', link: '/guide/getting-started' },
            { text: 'Stage 1: Getting Started', link: '/guide/stage1' },
            { text: 'Stage 2: Basic Farming', link: '/guide/stage2' },
            { text: 'Stage 3: Expanding Your Farm', link: '/guide/stage3' }
          ]
        },
        {
          text: 'Other Guides',
          items: [
            { text: 'Basic Farming', link: '/guide/basic-farming' },
            { text: 'Advanced Techniques', link: '/guide/advanced-techniques' },
            { text: 'Contributing', link: '/guide/contributing' }
          ]
        }
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