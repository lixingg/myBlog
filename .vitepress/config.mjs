import {defineConfig} from 'vitepress'
import {set_sidebar} from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head:[['link',{rel:'icon',href:'/logo.png'}]],
  title: "李鑫的博客",
  description: "李鑫的博客",
  themeConfig: {
    outlineTitle: "文档目录",
    logo: '/logo.png',
    outline: [2, 6],
    // sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '首页', link: '/'},
      {text: 'css', link: '/pages/web/'},
      {
        text: '前端',
        items: [
          {text: '技术中心', link: '/pages/web/'},
          {text: '面试宝典', link: '/vue/vue2'}
        ]
      },
      {
        text: '后端',
        items: [
          {text: '技术中心', link: '/pages/server/'},
          {text: '面试宝典', link: '/vue/vue2'}
        ]
      },
      {
        text: '运维',
        items: [
          {text: '技术中心', link: '/pages/operation/'},
          {text: '面试宝典', link: '/vue/vue2'}
        ]
      }
    ],

    /*     sidebar: [
           {
             text: 'Examples',
             items: [
               { text: 'Markdown Examples', link: '/markdown-examples' },
               { text: 'Runtime API Examples', link: '/api-examples' }
             ]
           },
             {
                 text: 'Examples',
                 items: [
                     { text: 'Markdown Examples', link: '/markdown-examples' },
                     { text: 'Runtime API Examples', link: '/api-examples' }
                 ]
             }
         ],*/
/*    sidebar: {
      '/pages/web': set_sidebar('/pages/web'),
      '/pages/server': set_sidebar('/pages/server'),
      '/pages/operation': set_sidebar('/pages/operation'),
    },*/
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
      {icon: 'gitee', link: 'https://github.com/vuejs/vitepress'}
    ],
    footer: {
      copyright: "Copyright © 2023-present lixin"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
