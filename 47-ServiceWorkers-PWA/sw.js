// Estos son los archivos necesario para trabajar sin conexión 
const cacheName = 'apv-01';
const files = [
   '/',
   '/index.html',
   '/error.html',
   '/css/bootstrap.css',
   '/css/styles.css',
   '/js/app.js',
   '/js/apv.js'
];

// Para iniciar un evento se usa self
self.addEventListener('install', event => {
    console.log('Instalado el Service Worker');
    // Esperar a que todos los archivos se descarguen
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Cacheando');
            cache.addAll(files);
        })
    );
});

// Activar el ServiceWorker
self.addEventListener('activate', event => {
    console.log('Service Worker activo');
    event.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== cacheName).map(key => caches.delete(key)) // borra las versiones anteriores
                );
            })
    );
});

// Evento fect para descargar archivo estatico
self.addEventListener('fetch', e => {
    console.log('Fech...', event);

    event.respondwith(
        caches.match(event.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch( () => caches.match('/error.html'))
    );
    
});