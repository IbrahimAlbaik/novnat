import { defineNuxtPlugin } from '#app';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  // Provide GLightbox as a function to allow flexible initialization
  nuxtApp.provide('glightbox', (options = {}) => GLightbox(options));
});
