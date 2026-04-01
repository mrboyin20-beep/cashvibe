const CACHE_NAME = 'cashvibe-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('[PWA] Service Worker Installed');
});

self.addEventListener('activate', (event) => {
  console.log('[PWA] Service Worker Activated');
});

// Dummy fetch listener (Google Chrome ko satisfy karne ke liye zaroori hai)
self.addEventListener('fetch', (event) => {
  // Firebase realtime app hai, isliye hum caching bypass kar rahe hain
});