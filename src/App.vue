<script setup lang="ts">
import Navbar from './components/ui/Navbar.vue';
import Education from './sections/education/Education.vue';
import Experience from './sections/experiences/Experiences.vue';
import Hero from './sections/Hero.vue';
import Projects from './sections/projects/Projects.vue';
import Skills from './sections/skills/Skills.vue';
import MouseFollower from './components/ui/MouseFollower.vue';
import { ref, onMounted } from 'vue';

interface MouseFollower {
  showOnTarget: (element: Element) => void;
  hideOnTarget: (element: Element) => void;
}

const mouseFollowerRef = ref<MouseFollower | null>(null);

onMounted(() => {
  if (mouseFollowerRef.value) {
    const elShow = document.querySelectorAll('.hoverMouseFollower') as NodeListOf<Element>;
    elShow.forEach((element) => {
      mouseFollowerRef.value?.showOnTarget(element);
    });
    const elHide = document.querySelectorAll('.hideMouseFollower') as NodeListOf<Element>;
    elHide.forEach((element) => {
      mouseFollowerRef.value?.hideOnTarget(element);
    });
  }
});

</script>

<template>

  <Navbar />

  <div class="flex flex-col gap-32">
    
    <Hero />

    <Experience />

    <Projects />
    
    <Skills />

    <Education />
    
  </div>

  <MouseFollower ref="mouseFollowerRef" />
</template>

<style></style>