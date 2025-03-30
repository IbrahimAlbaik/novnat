import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      startLoading: () => NProgress.start(),
      stopLoading: () => NProgress.done(),
    },
  };
});
