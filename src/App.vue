<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      name="page-transition"
      mode="out-in"
      @after-leave="scrollToTop"
      class="py-32"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  
  <MouseFollower v-if="!mobile" />

  <Navbar />
</template>

<script setup lang="ts">
import Navbar from './components/ui/Navbar.vue';
import { defineAsyncComponent } from 'vue';
import { onMounted, ref, onUnmounted } from 'vue';

const MouseFollower = defineAsyncComponent({
  loader: () => import('./components/ui/MouseFollower.vue'),
  delay: 200
});

const mobile = ref(false);

const checkMobile = () => {
  mobile.value = window.innerWidth < 640;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

onMounted(() => {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  requestAnimationFrame(() => {
    document.body.style.transition = 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style>
.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.page-transition-leave-active {
  transition: opacity 300ms cubic-bezier(0.32, 0, 0.67, 0), transform 300ms cubic-bezier(0.32, 0, 0.67, 0);
}
.page-transition-enter-active {
  transition: opacity 300ms cubic-bezier(0.33, 1, 0.68, 1), transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>