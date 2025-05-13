<template>
  <Section title="Projects">
    
    <div class="flex flex-col gap-16 justify-center">

      <ProjectCard
        v-for="(project, idx) in projects"
        :key="idx"
        :title="project.title"
        :image="project.thumbnail"
        :role="project.role"
        :tools="project.tools"
        :description="project.description"
        :links="project.links"
        :color="project.color"
      />

      <div class="p-2 cursor-pointer bg-clip-padding border-2 border-primary-light hover:bg-primary-light transition-all rounded-md flex justify-center items-center text-sm font-medium gap-1 hover:gap-2">
        More Projects
        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
      </div>

    </div>

  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../../data/data';
</script>