import ElementPlus from 'element-plus'

import VPApp, { globals, NotFound } from '../vitepress'

export default {
  NotFound,
  Layout: VPApp,
  logo: 'https://s3.qiufeng.blue/muji/muji-logo-v2.jpg?imageView2/2/w/100',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
