import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
// import { visualizer } from "rollup-plugin-visualizer"
// import viteCompression from "vite-plugin-compression"

// https://vite.dev/config/
export default defineConfig({
  base: '/vue3-template/', // github Action自动部署到github page,所以需要修改base,默认是 /
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    vitePluginForArco({
      style: 'css',
    }),
    // viteCompression({
    //   verbose: true, // 是否在控制台输出压缩结果，默认为true
    //   disable: false, // 是否禁用压缩，默认为false
    //   threshold: 10240, // 文件大小超过10240字节（10KB）时才进行压缩
    //   algorithm: "gzip", // 压缩算法，可选['gzip', 'brotliCompress', 'deflate', 'deflateRaw']
    //   ext: ".gz", // 压缩文件的扩展名
    //   compressionOptions: {}, // 压缩算法的参数
    //   deleteOriginFile: false, // 压缩后是否删除源文件
    // }),
    // visualizer({
    //   gzipSize: true, // 显示各文件在经过 gzip 压缩后的大小
    //   brotliSize: true, // 显示各文件在经过 brotli 压缩后的
    //   open: true,
    //   filename: "visualizer.html", // 生成的报告文件名称
    // }),
  ],
  // css: { // 主题定制
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         'arcoblue-6': '#f65b19',
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  build: {
    rollupOptions: {
      // external: ["monaco-editor"],
      output: {
        manualChunks: {
          vue: ['vue'],
          arcoUi: ['@arco-design/web-vue'],
        },
        // globals: {
        //   "monaco-editor": "monaco",
        // },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
