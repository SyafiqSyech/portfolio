<template>
  <Section title="Projects" :project="true">
    
    <div class="flex flex-col gap-4 justify-center">

      <ProjectCard
        v-for="(project) in projects"
        :key="project.id"
        :id="project.id"
        :title="project.title"
        :image="project.thumbnail"
        :summary="project.summary"
        :links="project.links"
        :color="project.color"
        :phone="project.phone"
      />

      <ButtonUI
        label="View All Projects"
        :handle-click="() => {}"
      >
      </ButtonUI>


    </div>

  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../../data/data';
import ButtonUI from '../../components/ui/ButtonUI.vue';
</script>