<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { experiences, projects } from '../../data/data';

const route = useRoute();
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

const changeLabel = (label: string) => {
  text.value = label;
};

const tagTarget = (elementId: string, label: string, hideOnElementIds: string[] | undefined) => {
  const target = document.getElementById(elementId) as HTMLElement;
  const hideOnTargets = hideOnElementIds?.map(id => document.getElementById(id)).filter(el => el) as HTMLElement[] || [];

  if (!target) return;
  
  targetElement.value = target;

  target.addEventListener('mouseover', () => {
    if(!hideOnTargets.some(el => el.matches(':hover'))) {
      showFollower();
      changeLabel(label);
    }
  });
  hideOnTargets?.forEach(el => el.addEventListener('mouseover', hideFollower));
  target.addEventListener('mouseleave', hideFollower);
};

onUnmounted(() => {
  if (targetElement.value) {
    targetElement.value.removeEventListener('mouseover', showFollower);
    targetElement.value.removeEventListener('mouseleave', hideFollower);
  }
  document.removeEventListener('mousemove', updatePosition);
});

onMounted(() => {
  document.addEventListener('mousemove', updatePosition);
  smoothUpdate();
});

watch(
  () => route.path,
  () => {
    setTimeout(() => {
      isVisible.value = false;
      experiences.forEach((experience) => {
        tagTarget(experience.id, 'Job Details', undefined);
      });
      projects.forEach((project) => {
        const hideOnElementIds = [`gallery-${project.id}`];
        project.links?.github ? hideOnElementIds.push(`source-code-${project.id}`) : undefined;
        project.links?.website ? hideOnElementIds.push(`website-${project.id}`) : undefined;
        tagTarget(project.id, project.title + ' Details', hideOnElementIds);
      });
    }, 400);
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="fixed pointer-events-none select-none bg-primary px-2 py-1 gap-1.5 text-sm font-medium rounded-lg rounded-bl-none flex items-center text-background z-[9999] transition-[opacity]"
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
    <div class="arrow-animate">
      <IconArrowRight
        class="w-4 h-4 stroke-background"
      />
    </div>
  </div>
</template>

<style>
.arrow-animate {
  animation: arrowAnimate 1000ms infinite;
}

@keyframes arrowAnimate {
  0% {
    padding-left: 0;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  }
  50% {
    padding-left: 6px;
    animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
  }
  100% {
    padding-left: 0;
  }
}
</style>