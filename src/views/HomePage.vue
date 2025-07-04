<template>
  <div class="flex flex-col gap-32">
    
    <Hero />

    <Suspense>

      <template #default>
        <div class="flex flex-col gap-32">

          <Experiences />
          
          <Projects />
          
          <Skills />
          
          <Education />

        </div>
      </template>

      <template #fallback>
        <div class="flex flex-col gap-32 animate-pulse">
          <div class="h-64 bg-background-card rounded-lg"></div>
          <div class="h-64 bg-background-card rounded-lg"></div>
          <div class="h-64 bg-background-card rounded-lg"></div>
        </div>
      </template>
      
    </Suspense>
    
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Hero from '../sections/Hero.vue';

const Experiences = defineAsyncComponent({
  loader: () => import('../sections/experiences/ExperiencesSection.vue'),
  delay: 200,
  timeout: 3000
});

const Projects = defineAsyncComponent({
  loader: () => import('../sections/projects/ProjectsSection.vue'),
  delay: 200,
  timeout: 3000
});

const Skills = defineAsyncComponent({
  loader: () => import('../sections/skills/SkillsSection.vue'),
  delay: 200,
  timeout: 3000
});

const Education = defineAsyncComponent({
  loader: () => import('../sections/education/EducationsSection.vue'),
  delay: 200,
  timeout: 3000
});
</script>