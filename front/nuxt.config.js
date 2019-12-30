const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '聚渌创环保咨询',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  **全局禁用所有链接上的预取
  */
  router: {
    base:"/juluchuang/", //此为根目录，如果有具体目录需求按实际情况写
    prefetchLinks: false
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css', // 样式初始化
    '@/assets/css/animate.css', // 动画样式
    'swiper/dist/css/swiper.css', //swiper插件的样式
    'element-ui/lib/theme-chalk/index.css' // element-ui css
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {
    //   src: '@/assets/js/flexible.js',
    //   ssr: false
    // }
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
    { src: '@/plugins/wow', ssr: false },
    { src: '@/plugins/element-ui', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/proxy-module#readme
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  // 设置代理
  proxy: {
    '/web': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      pathRewrite: {
        '^/web': '/'
      }
    }
  },
  /*
  ** Global less
  */
  styleResources: {
    less: './assets/css/*.less'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        // px to rem
        // 'postcss-pxtorem': {
        //   rootValue: 160,
        //   propList: ['*']
        // }
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
