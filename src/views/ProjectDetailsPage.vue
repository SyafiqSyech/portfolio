<template>
  <div class="flex flex-col gap-16">

    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: project ? project.title : 'Project Not Found' }
      ]"
    />

    <template v-if="project">

      <div>
        <h1 class="font-title text-3xl transition-colors">
          {{ project.title }}
        </h1>
        <p class="font-text text-secondary mt-4">
          {{ project.summary }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 font-text">
        <div>
          <h2 class="text-secondary mb-1">Role</h2>
          <p class="text-primary transition-colors">{{ project.role }}</p>
        </div>
        <div>
          <h2 class="text-secondary mb-1">Type</h2>
          <p class="text-primary transition-colors">{{ project.type }}</p>
        </div>
        <div>
          <h2 class="text-secondary mb-1">Tech</h2>
          <p class="text-primary transition-colors">{{ project.tech.join(', ') }}</p>
        </div>
        <div>
          <h2 class="text-secondary mb-1">Links</h2>
          <div class="flex sm:flex-wrap text-sm gap-2">
            <a
              v-if="project.links?.github"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonUI
                :id="`source-code-${project.id}`"
                label='Source Code'
                :small="true"
                class="sm:flex"
              >
                <IconCode class="w-4 h-4" />
              </ButtonUI>
            </a>
            <a
              v-if="project.links?.website"
              :href="project.links.website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonUI
                :id="`website-${project.id}`"
                label='Website'
                :small="true"
                class="sm:flex"
              >
                <IconLink class="w-4 h-4" />
              </ButtonUI>
            </a>
          </div>
        </div>
      </div>

      <div class="font-text">
        <div class="flex flex-col gap-2">
          <div v-for="(description, index) in project.description" :key="index" class="flex gap-2 p-2 rounded-lg bg-background-card border-[.1rem] border-border sm:hover:bg-background-card-hover sm:hover:border-border-hover group transition-all">
            <div>
              <IconCheck class="w-4 h-4 text-secondary sm:group-hover:text-primary transition-all" />
            </div>
            <p class="text-secondary sm:group-hover:text-primary transition-all">{{ description }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          :style="{ backgroundColor: project.color }"
          class="aspect-square rounded-lg flex items-center justify-center p-6 relative"
        >
          <img 
            :src="`/images/${project.id}/${project.images[0].src}`"
            :alt="`${project.title} - ${project.summary} | Abdullah Syafiq's Portfolio Project`"
            loading="lazy"
            class="rounded-lg sm:hover:scale-105 sm:hover:shadow-lg duration-300"
            :class="project.images[0].phone ? 'h-full' : 'w-full'"
          />
        </div>
      </div>
    
    </template>

    <template v-else>
      <div class="text-secondary text-center transition-colors">
        Project not found.
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { IconCode, IconLink, IconCheck } from '@tabler/icons-vue';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import { projects } from '../data/projects';

const route = useRoute();
const project = projects.find(p => p.id === route.params.projectId);
</script>