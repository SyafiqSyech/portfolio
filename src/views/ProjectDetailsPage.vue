<template>
  <div class="relative">

    <div class="absolute w-full -top-12 sm:-top-28 flex justify-end sm:justify-center text-sm">
      <ButtonUI
        label="Back"
        :handle-click="() => router.back()"
        class="fixed z-50"
        :small="true"
        :iconRight="true"
      >
        <IconX class="w-4 h-4" />
      </ButtonUI>
    </div>

    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: project ? project.title : 'Not Found' }
      ]"
      class="mb-16"
    />
    
    <div v-if="project" class="flex flex-col gap-16">
  
      <div>
        <div class="font-title text-3xl">
          {{ project.title }}
        </div>
        <div class="font-text text-secondary mt-4">
          {{ project.summary }}
        </div>
      </div>
  
      <div class="grid sm:grid-cols-2 gap-8 font-text">
        <div>
          <div class="text-secondary mb-1">Role</div>
          <div class="text-primary">{{ project.role }}</div>
        </div>
        <div>
          <div class="text-secondary mb-1">Type</div>
          <div class="text-primary">{{ project.type }}</div>
        </div>
        <div>
          <div class="text-secondary mb-1">Tech</div>
          <div class="text-primary">{{ project.tech.join(', ') }}</div>
        </div>
        <div>
          <div class="text-secondary mb-1">Links</div>
          <div class="flex max-sm:flex-col sm:flex-wrap text-sm gap-2">
            <ButtonUI
              :id="`source-code-${project.id}`"
              v-if="project.links?.github"
              label='Source Code'
              :handle-click="() => openLink(project?.links?.github)"
              :small="true"
              class="sm:flex"
            >
              <IconCode class="w-4 h-4" />
            </ButtonUI>
            <ButtonUI
              :id="`website-${project.id}`"
              v-if="project.links?.website"
              label='Website'
              :handle-click="() => openLink(project?.links?.website)"
              :small="true"
              class="sm:flex"
            >
              <IconLink class="w-4 h-4" />
            </ButtonUI>
          </div>
        </div>
      </div>
  
      <div class="font-text">
        <div class="flex flex-col gap-2">
          <div v-for="(description, index) in project.description" :key="index" class="flex gap-2 p-2 rounded-lg bg-background-card border-[.1rem] border-border hover:bg-background-card-hover hover:border-border-hover group transition-all">
            <div>
              <IconCheck class="w-4 h-4 text-secondary group-hover:text-primary transition-all" />
            </div>
            <div class="text-secondary group-hover:text-primary transition-all">{{ description }}</div>
          </div>
        </div>
      </div>
  
      <div 
        :style="{ backgroundColor: project.color }"
        class="rounded-lg flex flex-col gap-16 px-8 py-16"
      >
        <div
          v-for="(image, index) in project.images || []"
          :key="index"
          class="group px-8"
          :class="[
            // !image.phone && index === 0 ? 'pt-32' : '',
            // !image.phone && index === (project.images?.length ?? 0) - 1 ? 'pb-32' : '',
          ]"
        >
          <img
            :src="`/${project.id}/${image.src}`"
            :alt="`${project.title} image ${index + 1}`"
            class="rounded-lg w-full hover:scale-105 hover:shadow-lg transition-all duration-300"
          />
        </div>
      </div>
  
    </div>
    <div v-else>
      <div class="flex items-center justify-center">
        <div class="text-secondary">Project not found</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { IconCode, IconLink, IconCheck, IconX } from '@tabler/icons-vue';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import { projects } from '../data/data';

const route = useRoute();
const router = useRouter();

const project = projects.find(p => p.id === route.params.projectId);

const openLink = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>