<template>
  <div class="flex flex-col gap-8">
    
    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Projects' }
      ]"
    />

    <div class="flex flex-col gap-4 justify-center">
  
      <ProjectCard
        v-for="(project) in projects"
        :key="project.id"
        :id="project.id"
        :title="project.title"
        :image="project.images[0].src"
        :summary="project.summary"
        :links="project.links"
        :color="project.color"
        :phone="project.images[0].phone"
      />
  
      <div class="flex justify-center">
        <RouterLink to="/">
          <ButtonUI label="Go Back Home" />
        </RouterLink>
      </div>
  
    </div>
  </div>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import ProjectCard from '../sections/projects/ProjectCard.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import { projects } from '../data/projects';
</script>