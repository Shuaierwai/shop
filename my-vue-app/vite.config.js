import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置element ui
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  //配置vue3 @路径
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
        less: {
            modifyVars: {
                hack: `true; @import (reference) "${path.resolve("src/styles/var.less")}";`,
            },
            javascriptEnabled: true,
        },
    },
},
})
