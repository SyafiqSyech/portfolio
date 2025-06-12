<template>
  <Section title="All My Projects">
    
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

      <RouterLink to="/">
        <ButtonUI
          label="Go Back Home"
          :handle-click="() => {}"
        >
        </ButtonUI>
      </RouterLink>

    </div>

  </Section>
</template>

<script setup lang="ts">
import Section from '../components/layout/Section.vue';
import ProjectCard from '../sections/projects/ProjectCard.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import { projects } from '../data/data';
</script>