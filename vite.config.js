import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5174,
    open: false,
  },
  
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        sectors: 'sectors.html',
        seo: 'seo.html',
        'digital-strategy': 'digital-strategy.html',
        'paid-media': 'paid-media.html',
        'social-media': 'social-media.html',
        webdesign: 'webdesign.html' // Yeni Spline 3D sayfamızı buraya ekledik
      }
    }
  }
});
