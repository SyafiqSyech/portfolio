<template>
  <div class="flex flex-col gap-32">
    
    <Hero />

    <Experience />

    <Projects />
    
    <Skills />

    <Education />
    
  </div>
</template>

<script setup lang="ts">
import Education from '../sections/education/Education.vue';
import Experience from '../sections/experiences/Experiences.vue';
import Hero from '../sections/Hero.vue';
import Projects from '../sections/projects/Projects.vue';
import Skills from '../sections/skills/Skills.vue';
</script>