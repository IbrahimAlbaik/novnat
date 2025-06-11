<template>
  <div class="brand-one">
    <div class="container">
      <div class="block-title text-center">
        <p>Working towards UN’s Sustainable Development Goals</p>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one-carousel">
            <no-ssr>
              <Swiper
                :slides-per-view="slidesPerView"
                :space-between="spaceBetween"
                :autoplay="{ delay: 1000, disableOnInteraction: false }"
                :modules="[Autoplay, Pagination, Navigation]"
                :loop="loop"
                :breakpoints="breakpoints"
              >
                <SwiperSlide v-for="goal in goals" :key="goal.id">
                  <div class="single_brand_item target">
                    <a :href="goal.URL" target="_blank"
                      ><img :src="goal.image" alt="brand"
                    /></a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Autoplay, Pagination, Navigation } from "swiper";


export default {
  name: "BrandOne",
  props: ["goals"],
  setup(props) {
    const isMobile = ref(false);
    const slidesPerView = ref(3);
    const spaceBetween = ref(10);
    const loop = ref(false);

    const breakpoints = {
      0: { slidesPerView: 1, spaceBetween: 5 },
      640: { slidesPerView: 2, spaceBetween: 5 },
      992: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    };

    onMounted(() => {
      if (typeof window !== 'undefined') {
        isMobile.value = window.innerWidth < 992;
        loop.value = isMobile.value;

        // Update responsive settings on resize
        const updateSize = () => {
          isMobile.value = window.innerWidth < 992;
          loop.value = isMobile.value;
        };

        window.addEventListener('resize', updateSize);

        // Clean up the event listener on component unmount
        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateSize);
        });
      }
    });

    return {
      Autoplay,
      Pagination,
      Navigation,
      slidesPerView,
      spaceBetween,
      loop,
      breakpoints,
    };
  },
};
</script>
<style scoped></style>
