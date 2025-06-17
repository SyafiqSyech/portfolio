<template>
  <RouterLink 
    :id="id"
    :to="`/experiences/${id}`"
    class="border-[.1rem] border-border bg-background-card rounded-xl p-4 cursor-pointer sm:hover:border-border-hover sm:hover:bg-background-card-hover transition-all group"
  >

    <div class="sm:flex sm:flex-row-reverse justify-between items-center">
      <p class="font-text text-secondary text-sm">
        {{ date }}
      </p>
      <h2 class="font-title max-sm:mt-4">
        {{ company }}
      </h2>
    </div>

    <p class="font-text text-secondary mt-1">
      {{ role }}
    </p>
    
    <div class="sm:hidden text-sm mt-4">
      <ButtonUI
        label="View Details"
        :small="true"
        :iconRight="true"
      >
        <IconArrowRight class="w-4 h-4" />
      </ButtonUI>
    </div>

  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { IconArrowRight } from '@tabler/icons-vue';
import ButtonUI from '../../components/ui/ButtonUI.vue';

defineProps({
  id: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});
</script>