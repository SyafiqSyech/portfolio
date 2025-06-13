<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      name="slide-down"
      mode="out-in"
      @after-leave="scrollToTop"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  
  <MouseFollower />

  <Navbar />
</template>

<script setup lang="ts">
import Navbar from './components/ui/Navbar.vue';
import MouseFollower from './components/ui/MouseFollower.vue';
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    document.body.style.transition = 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease';
  }, 100);

  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};
</script>

<style>
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(100px);
  will-change: opacity, transform;
}

.slide-down-leave-active {
  transition: 300ms cubic-bezier(0.32, 0, 0.67, 0);
}
.slide-down-enter-active {
  transition: 300ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>