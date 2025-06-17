<template>
  <Section title="Projects" :more="true">
    
    <div class="flex flex-col gap-4 justify-center">

      <ProjectCard
        v-for="(project) in projects.slice(0, 3)"
        :key="project.id"
        :id="project.id"
        :title="project.title"
        :image="project.images[0].src"
        :summary="project.summary"
        :links="project.links"
        :color="project.color"
        :phone="project.images[0].phone"
      />
      
      <RouterLink to="/projects">
        <ButtonUI
          label="View All Projects"
          :handle-click="() => {}"
        >
        </ButtonUI>
      </RouterLink>
  
    </div>
    
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../../data/projects';
import ButtonUI from '../../components/ui/ButtonUI.vue';
</script>