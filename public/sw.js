/* miriz service worker: shows push notifications and opens the app when one is tapped */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));

self.addEventListener('push',e=>{
  let d={};
  try{d=e.data?e.data.json():{}}catch(_){d={body:e.data&&e.data.text()}}
  e.waitUntil(self.registration.showNotification(d.title||'miriz',{
    body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',lang:'he',dir:'rtl',
    tag:d.tag||'miriz',data:{url:d.url||'/'}
  }));
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const url=(e.notification.data&&e.notification.data.url)||'/';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{
    const w=ws.find(c=>'focus' in c);
    return w?w.focus():self.clients.openWindow(url);
  }));
});
