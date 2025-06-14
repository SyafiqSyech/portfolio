<template>
  <div class="flex flex-col gap-16 relative">
    
    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: experience?.company }
      ]"
    />
    
    <template v-if="experience">
        
      <div class="font-title text-3xl">
        {{ experience?.company }}
      </div>

      <div class="grid sm:grid-cols-2 gap-4 font-text">
        <div>
          <div class="text-secondary mb-1">Position</div>
          <div class="text-primary">{{ experience?.role }}</div>
        </div>
        <div>
          <div class="text-secondary mb-1">Duration</div>
          <div class="text-primary">{{ experience?.date }}</div>
        </div>
        <div>
          <div class="text-secondary mb-1">Location</div>
          <div class="text-primary">{{ experience?.location }}</div>
        </div>
      </div>

      <div class="font-text">
        <div class="flex flex-col gap-2">
          <div v-for="(description, index) in experience?.description" :key="index" class="flex gap-2 p-2 rounded-lg bg-background-card border-[.1rem] border-border sm:hover:bg-background-card-hover sm:hover:border-border-hover group transition-all">
            <div>
              <IconCheck class="w-4 h-4 text-secondary sm:group-hover:text-primary transition-all" />
            </div>
            <div class="text-secondary sm:group-hover:text-primary transition-all">{{ description }}</div>
          </div>
        </div>
      </div>

    </template>

    <template v-else>
      <div class="text-secondary text-center">
        Experience not found.
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { experiences } from '../data/data';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import { IconCheck } from '@tabler/icons-vue';

const route = useRoute();
const experience = experiences.find(exp => exp.id === route.params.experienceId);
</script>