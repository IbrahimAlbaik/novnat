import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: process.env.BASE_URL || 'https://darkred-cheetah-840594.hostingersite.com/api'
  });

  nuxtApp.provide('axios', api);
});
