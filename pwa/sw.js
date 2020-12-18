const CACHE_NAME = "cache_v" + 1;
const CACHE_LIST = ["/", "/index.html", "/index.css", "/main.js", "/api/img"];

function fetchAddSave(request) {
  return fetch(request).then((res) => {
    //update caches
    let r = res.clone(); //由于（node）res是可读流，put中消耗了以后，return就无法得到res，所以要进行克隆
    caches.open(CACHE_NAME).then((cache) => cache.put(request, r));
    return res;
  });
}

//监听用户的请求
self.addEventListener("fetch", (e) => {
  //缓存策略

  if (e.request.url.includes("/api/")) {
    return e.respondWith(
      fetchAddSave(e.request).catch((err) => {
        return caches.open(CACHE_NAME).then((cache) => cache.match(e.request));
      })
    );
  }
  e.respondWith(
    //请求失败就去读取缓存
    fetch(e.request).catch((err) => {
      return caches.open(CACHE_NAME).then((cache) => cache.match(e.request));
    })
  );
});

function preCache() {
  return caches.open(CACHE_NAME).then((cache) => {
    //添加列表到缓存中
    return cache.addAll(CACHE_LIST);
  });
}

self.addEventListener("install", (e) => {
  //如果上一个sw没销毁，要手动skipWating(或刷新)
  e.waitUntil(preCache().then(skipWaiting)); //等待promise执行完，并skipWating
});
function clearCache() {
  //打开缓存，比较CACHE_NAME
  return caches.keys().then((keys) => {
    return Promise.all(
      keys.map((key) => {
        //一个promise数组，所以要使用Pro.All
        if (key !== CACHE_NAME) {
          return caches.delete(key); //返回一个promise
        }
      })
    );
  });
}
//install完成后，必须（执行skipWating）激活；
self.addEventListener("activate", (e) => {
  //激活，要清空以前的缓存，并让serviceworker的立即生效（claim）（两个promise）；使用Promise.All
  e.waitUntil(Promise.all([clearCache(), self.clients.claim()]));
});
