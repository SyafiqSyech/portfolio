<template>
  <div class="flex flex-col gap-16 relative">
    
    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Experiences', to: '/experiences' },
        { label: experience ? experience.company : 'Experience Not Found' }
      ]"
    />
    
    <template v-if="experience">
        
      <h1 class="font-title text-3xl transition-colors">
        {{ experience?.company }}
      </h1>

      <div class="grid sm:grid-cols-2 gap-4 font-text">
        <div>
          <h2 class="text-secondary mb-1">Position</h2>
          <p class="text-primary transition-colors">{{ experience?.role }}</p>
        </div>
        <div>
          <h2 class="text-secondary mb-1">Duration</h2>
          <p class="text-primary transition-colors">{{ experience?.date }}</p>
        </div>
        <div>
          <h2 class="text-secondary mb-1">Location</h2>
          <p class="text-primary transition-colors">{{ experience?.location }}</p>
        </div>
      </div>

      <div class="font-text">
        <div class="flex flex-col gap-2">
          <div v-for="(description, index) in experience?.description" :key="index" class="flex gap-2 p-2 rounded-lg bg-background-card border-[.1rem] border-border sm:hover:bg-background-card-hover sm:hover:border-border-hover group transition-all">
            <div>
              <IconCheck class="w-4 h-4 text-secondary sm:group-hover:text-primary transition-all" />
            </div>
            <p class="text-secondary sm:group-hover:text-primary transition-all">{{ description }}</p>
          </div>
        </div>
      </div>

    </template>

    <template v-else>
      <div class="text-secondary text-center transition-colors">
        Experience not found.
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { experiences } from '../data/experiences';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import { IconCheck } from '@tabler/icons-vue';

const route = useRoute();
const experience = experiences.find(exp => exp.id === route.params.experienceId);
</script>