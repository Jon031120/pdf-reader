/* EA PDF service worker — network-first for the app HTML, cache-first for libraries */
const CACHE = 'ea-pdf-v48';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './materials.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isDoc = e.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html');
  if (isDoc) {
    // network-first: always try to fetch the latest page, fall back to cache offline
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        if (res.ok) caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(e.request).then(h => h || caches.match('./index.html')))
    );
    return;
  }
  // everything else (libraries, icons, materials): cache-first
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      if (res.ok || res.type === 'opaque') caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
      return res;
    }))
  );
});
