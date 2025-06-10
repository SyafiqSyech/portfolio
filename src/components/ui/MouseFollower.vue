<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const x = ref(0);
const y = ref(0);
const targetX = ref(0);
const targetY = ref(0);
const targetElement = ref<HTMLElement | null>(null);
const text = ref('View Details');

const updatePosition = (event: MouseEvent) => {
  targetX.value = event.clientX;
  targetY.value = event.clientY;
};

const smoothUpdate = () => {
  x.value += (targetX.value - x.value) * 0.1; 
  y.value += (targetY.value - y.value) * 0.1;
  requestAnimationFrame(smoothUpdate);
};

const showFollower = () => {
  isVisible.value = true;
};

const hideFollower = () => {
  isVisible.value = false;
};

const showOnTarget = (element: string | HTMLElement) => {
  const target = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element;
  
  if (!target) return;
  
  targetElement.value = target;
  target.addEventListener('mouseenter', showFollower);
  target.addEventListener('mouseleave', hideFollower);
};

const hideOnTarget = (element: string | HTMLElement) => {
  const target = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element;

  if (!target) return;

  target.addEventListener('mouseenter', hideFollower);
  target.addEventListener('mouseleave', showFollower);
};

onUnmounted(() => {
  if (targetElement.value) {
    targetElement.value.removeEventListener('mouseenter', showFollower);
    targetElement.value.removeEventListener('mouseleave', hideFollower);
  }
  document.removeEventListener('mousemove', updatePosition);
});

onMounted(() => {
  document.addEventListener('mousemove', updatePosition);
  smoothUpdate();
});

defineExpose({ showOnTarget, hideOnTarget });
</script>

<template>
  <div
    class="fixed pointer-events-none bg-primary px-2 py-1 gap-1.5 text-sm font-medium rounded-lg rounded-bl-none flex items-center text-background z-[9999] transition-[opacity]"
    :class="{
      'opacity-100': isVisible,
      'opacity-0': !isVisible,
    }"
    :style="{
      left: `${x+8}px`,
      top: `${y-24}px`
    }"
  >
    {{ text }}
    <IconArrowRight
      class="w-4 h-4 stroke-backgtext-background"
    />
      
  </div>
</template>