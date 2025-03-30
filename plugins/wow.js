// plugins/wow.js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('wow.js').then((module) => {
      const WOW = module.default;
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
      });

      // Initialize WOW.js
      wow.init();

      // Reinitialize WOW.js on scroll
      const handleScroll = () => {
        wow.sync();
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup when the app is destroyed
      nuxtApp.hook('app:beforeUnmount', () => {
        window.removeEventListener('scroll', handleScroll);
      });
    });
  }
});
