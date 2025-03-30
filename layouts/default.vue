<template>
  <div>
    <div v-if="loading" class="global-loading">
      <div class="loading-state">
        <div class="loading-content">
          <div class="spinner">
            <div class="spinner-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="page-wrapper">
        <NuxtPage />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNuxtApp } from '#app';
import Footer from "@/components/Footer";

const store = useStore();
const { $axios } = useNuxtApp();

// Initialize data fetching
onMounted(async () => {
  if (!store.getters.isDataFetched) {
    await store.dispatch("fetchPageData", $axios);
  }
});

const loading = computed(() => store.getters.isLoading);
</script>

<style scoped>
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  z-index: 9999;
}

.loading-state {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 80px;
  height: 80px;
  position: relative;
}

.spinner-inner {
  width: 100%;
  height: 100%;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
