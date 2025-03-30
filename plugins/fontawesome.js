// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons

export default defineNuxtPlugin((nuxtApp) => {
  // Disable auto-add CSS since Nuxt handles this
  config.autoAddCss = false;

  // Add icons to the library
  library.add(fas, fab);

  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
