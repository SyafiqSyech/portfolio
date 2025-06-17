<template>
  <div class="flex flex-col gap-32">
    
    <Hero />

    <Experiences />

    <Projects />
    
    <Skills />

    <Education />
    
  </div>
</template>

<script setup lang="ts">
import Education from '../sections/education/EducationsSection.vue';
import Experiences from '../sections/experiences/ExperiencesSection.vue';
import Hero from '../sections/Hero.vue';
import Projects from '../sections/projects/ProjectsSection.vue';
import Skills from '../sections/skills/SkillsSection.vue';
</script>