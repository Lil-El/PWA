let SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
const path = require("path");

module.exports = {
  pwa: {
    name: "My App",
    themeColor: "#f2f2f2",
    msTileColor: "#aaaaa",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "dev/service-worker.js",
    },
  },
  // chainWebpack, //修改内部的配置
  configureWebpack: {
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.resolve(__dirname, "src/skeleton.js"),
          },
        },
        router: {
          mode: "history",
          routes: [
            { path: "/", skeletonId: "skeleton1" },
            { path: "/about", skeletonId: "skeleton2" },
          ],
        },
      }),
    ],
  }, //新增配置
};
