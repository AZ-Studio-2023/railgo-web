import { defineClientConfig } from 'vuepress/client'
import Tabs from '/home/runner/work/railgo-web/railgo-web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.151_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_ee4b2c1831d96a6562c73e854f69c26b/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/home/runner/work/railgo-web/railgo-web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.151_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_ee4b2c1831d96a6562c73e854f69c26b/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/home/runner/work/railgo-web/railgo-web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.151_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_ee4b2c1831d96a6562c73e854f69c26b/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/home/runner/work/railgo-web/railgo-web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.151_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_ee4b2c1831d96a6562c73e854f69c26b/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/home/runner/work/railgo-web/railgo-web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.151_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_ee4b2c1831d96a6562c73e854f69c26b/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
