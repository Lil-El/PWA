# vue-pwa-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

---

先对项目进行打包 build，然后在 dist 目录下使用 http-server 进行代理
在 Vue.config.js 中对 pwa 进行配置
并在对应的位置添加 service-worker.js 文件；配置自己的缓存策略等

---

配置 skeleton，npm i vue-skeleton-webpack-plugin
在 config 中配置该插件
新建 skeleton.js 和 skeleton.vue 文件
