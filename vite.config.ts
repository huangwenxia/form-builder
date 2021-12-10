import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/main.scss";' // 添加公共样式
      }
    }
  },
  base: "./", // 打包路径
  server: {
    port: 3000, // 端口
    open: true, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      "/api": {
        target: "http://h5.tucy.top", // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: path => path.replace("/api/", "/")
      }
    }
  },

})
