const cacheName = "piedra-papel-tijera-v1";
const staticAssets = [
    "./",
    "./index.html",
    "./index.js",
    "./src/js/app.js",
    "./src/css/style.css",
    "./src/components/enter-game.js",
    "./src/components/game-board.js",
    "./src/components/my-error.js",
    "./assets/img/papel.png",
    "./assets/img/piedra.png",
    "./assets/img/tijera.png",
    "./assets/img/ok.png",
    "./assets/img/dedos.png"
];

self.addEventListener("install", async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener("activate", e => {
    self.clients.claim();
});

self.addEventListener("fetch", async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}
