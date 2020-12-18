//缓存名字
workbox.core.setCacheNameDetails({ prefix: "vue-pwa-project" });

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
//缓存列表
self.__precacheManifest = [].concat(
  self.__precacheManifest ||
    [
      //这里可以添加自己要缓存的文件
    ]
);
//将文件列表缓存
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//新增缓存策略
workbox.routing.registerRoute(function(obj) {
  //此函数返回true则缓存
  // 包涵api的就缓存下来
  return obj.url.href.includes("/user");
}, workbox.strategies.staleWhileRevalidate());
