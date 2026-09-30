const CACHE='diario-do-sono-1.0.1';const ASSETS=['./','./index.html','./style.css','./app.js','./core.js','./db.js','./terms.js','./pdf.js','./font-data.js','./FONT_LICENSE.txt','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple.png','./Guia_Diario_do_Sono.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('diario-do-sono-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.open(CACHE).then(async c=>{let hit=await c.match(e.request);return hit||fetch(e.request);}));});
