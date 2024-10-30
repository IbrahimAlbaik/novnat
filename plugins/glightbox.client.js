import { defineNuxtPlugin } from '#app';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('glightbox', () => GLightbox());
});
