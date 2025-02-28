import {defineConfig} from 'vitepress'
import {set_sidebar} from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base:'/myBlog/', // 使用github原始域名相关的配置
    head: [['link', {rel: 'icon', href: '/李鑫的博客.svg',title:'李鑫的博客',alt:'李鑫的博客'}]],
    title: "李鑫的博客",
    description: "李鑫的博客记录者学习内容，" +
        "李鑫的博客是记录着javascript的学习知识点，" +
        "李鑫的博客记录着css的知识点，" +
        "李鑫的博客记录着html的知识点，" +
        "李鑫的博客记录着nodeJS的知识点，" +
        "李鑫的博客记录着jquery的知识点，" +
        "李鑫的博客记录着vue的知识点，" +
        "李鑫的博客记录着react的知识点，" +
        "李鑫的博客记录着angular的知识点，" +
        "李鑫的博客记录着地图的知识点，" +
        "李鑫的博客记录着openlayer的知识点，" +
        "李鑫的博客记录着threejs的知识点，" +
        "李鑫的博客记录着d3的知识点，" +
        "李鑫的博客让所有人共享学习历程",
    themeConfig: {
        outlineTitle: "文档目录",
        logo: '/李鑫的博客.svg',
        outline: [2, 6],
        sidebar: false, // 关闭侧边栏
        // showSider: false,
        aside: "left", // 设置右侧侧边栏在左侧显示
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {
                text: '前端',
                items: [
                    // {text: 'HTML', link: '/pages/web/html'},
                    // {text: 'CSS', link: '/pages/web/css'},
                    // {text: 'Javascript', link: '/pages/web/js'},
                    // {text: 'nodeJS', link: '/pages/web/nodeJS'},
                    // {text: 'Ajax', link: '/pages/web/ajax'},
                    // {text: 'typescript', link: '/pages/web/typescript'},
                    {text: 'VUE', link: '/pages/web/vue'},
                    {text: 'React', link: '/pages/web/react'},
                    {text: 'Electron', link: '/pages/web/electron'},
                    {text: 'Canvas', link: '/pages/web/Canvas'},
                    {text: 'nodeJS', link: '/pages/web/nodeJS'},
                    {text: 'JQuery', link: '/pages/web/jquery'},
                    {text: 'PWA', link: '/pages/web/pwa'},
                    // {text: 'React-native', link: '/pages/web/react-native'},
                    {text: 'uni-app', link: '/pages/web/uni-app'},
                    {text: 'PHP', link: '/pages/web/php'},
                    {text: 'webpack', link: '/pages/web/webpack'},
                    {text: 'threeJS', link: '/pages/web/threeJS'},
                    {text: '数字孪生', link: '/pages/web/digital-twin'},
                    {text: 'WebRTC', link: '/pages/web/WebRTC'},
                    {text: 'Unity', link: '/pages/web/Unity'},
                    // {text: 'vite', link: '/pages/web/vite'},
                    // {text: 'Echarts', link: '/pages/web/Echarts'},
                    // {text: 'Flutter', link: '/pages/web/flutter'},
                    // {text: 'Dart', link: '/pages/web/Dart'},
                    // {text: 'Android', link: '/pages/web/android'},
                    // {text: 'Kotlin', link: '/pages/web/Kotlin'},
                    // {text: 'IOS', link: '/pages/web/IOS'},
                    // {text: 'HarmonyOS', link: '/pages/web/HarmonyOS'},
                    {text: '依赖包', link: '/pages/web/dependencies'},
                    {text: '技术中心', link: '/pages/web/'},

                ]
            },
            {
                text: '后端',
                items: [
                    {text: 'JAVA', link: '/pages/server/Java'},
                    {text: 'Python', link: '/pages/server/Python'},
                    {text: 'GO', link: '/pages/server/GO'},
                    {text: 'AI', link: '/pages/server/AI'},

                    {text: '技术中心', link: '/pages/server/'},
                    // {text: '面试宝典', link: '/vue/vue2'}
                ]
            },
            {
                text: '运维',
                items: [
                    {text: 'Linux', link: '/pages/operation/Linux'},
                    {text: 'Nginx', link: '/pages/operation/Nginx'},
                    {text: '技术中心', link: '/pages/operation/'},
                    // {text: '面试宝典', link: '/vue/vue2'}
                ]
            },
            {
                text: '网安',
                items: [
                    {text: '技术中心', link: '/pages/network/'},
                    // {text: '面试宝典', link: '/vue/vue2'}
                ]
            },
            {
                text: '软件',
                items: [
                    {text: '操作文档', link: '/pages/softWare/'},
                    // {text: '面试宝典', link: '/vue/vue2'}
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
            {icon: 'github', link: 'https://blog.loverzz.cn'},
            {
                icon: {
                    svg: '<svg t="1715514540355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7218" width="200" height="200"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m284.8 313.6c0 12.8-12.8 25.6-25.6 25.6H416c-41.6 0-76.8 35.2-76.8 76.8v243.2c0 12.8 12.8 25.6 25.6 25.6h240c41.6 0 76.8-35.2 76.8-76.8v-12.8c0-12.8-12.8-25.6-25.6-25.6H480c-12.8 0-25.6-12.8-25.6-25.6v-64c0-12.8 12.8-25.6 25.6-25.6h291.2c12.8 0 25.6 12.8 25.6 25.6v144c0 92.8-76.8 169.6-169.6 169.6H252.8c-12.8 0-25.6-12.8-25.6-25.6V412.8C227.2 310.4 310.4 224 416 224h355.2c12.8 0 25.6 12.8 25.6 25.6v64z" fill="#B32225" p-id="7219"></path></svg>'
                },
                link: 'https://blog.loverzz.cn'
            },
            {
                icon: {
                    svg: '<svg t="1715515113277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14774" width="200" height="200"><path d="M783.36 303.104h196.022857A510.646857 510.646857 0 0 1 1024 493.019429h-224.914286a1311.890286 1311.890286 0 0 0-15.725714-189.915429zM697.709714 34.377143c112.420571 43.666286 204.690286 126.354286 262.582857 230.765714h-183.332571c-20.845714-106.349714-52.370286-181.869714-79.250286-230.765714z m-164.205714 230.765714V0c40.448 1.792 79.689143 8.155429 117.174857 18.651429 28.525714 47.908571 65.206857 127.817143 88.393143 246.491428h-205.531429zM284.16 720.896a1300.553143 1300.553143 0 0 1-15.945143-189.915429h227.364572v189.915429H284.16zM283.794286 303.104h211.748571v189.915429H267.995429c0.950857-71.424 6.912-134.253714 15.798857-189.915429z m95.085714-285.257143a512.256 512.256 0 0 1 116.662857-17.773714v265.033143H290.011429c23.332571-119.296 60.306286-199.497143 88.868571-247.259429zM63.268571 265.106286A514.669714 514.669714 0 0 1 332.178286 32.804571c-27.062857 48.859429-59.062857 124.854857-80.091429 232.301715H63.232z m166.765715 227.913143H0.256c2.523429-67.474286 17.700571-131.657143 43.885714-189.915429h201.508572a1311.122286 1311.122286 0 0 0-15.725715 189.915429z m16.164571 227.913142H45.641143C19.309714 662.454857 2.486857 598.784 0 531.017143h230.144a1299.382857 1299.382857 0 0 0 16.018286 189.915428z m6.217143 37.997715c21.174857 108.544 53.686857 184.429714 80.859429 232.740571a513.462857 513.462857 0 0 1-269.494858-232.740571h188.635429z m243.163429 0V1024a513.828571 513.828571 0 0 1-115.456-17.444571c-28.598857-46.848-65.755429-127.451429-89.307429-247.625143h204.763429z m242.761142 0c-23.405714 119.442286-60.306286 199.753143-88.832 246.747428a519.387429 519.387429 0 0 1-115.931428 17.627429v-264.411429h204.8z m-204.8-227.913143h227.364572a1303.734857 1303.734857 0 0 1-15.945143 189.915428h-211.382857V531.017143z m227.620572-37.997714h-227.584V303.104h211.748571a1313.645714 1313.645714 0 0 1 15.835429 189.915429z m37.778286 37.997714h224.694857c-2.56 67.693714-19.236571 131.437714-45.421715 189.915428h-195.291428c8.923429-55.734857 15.140571-118.198857 16.018286-189.915428z m161.097142 227.913143a512 512 0 0 1-263.314285 231.131428c27.026286-48.347429 59.099429-123.721143 80.054857-231.131428h183.222857z" fill="#3882F5" p-id="14775"></path></svg>'
                },
                link: 'https://blog.loverzz.cn'
            }
        ],
/*           footer: {
             copyright: "Copyright © 2022-present lixin"
           },*/
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
