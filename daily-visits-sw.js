self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{await caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bwx-daily-counter-')).map(k=>caches.delete(k))));await self.registration.unregister();})()));
