<template>
  <div class="">

    <div class="mb-8" :class="more ? 'flex justify-between items-center' : ''">
      <h1 class="font-header text-2xl transition-colors">
        {{ title }}
      </h1>
      <RouterLink v-if="more" to="/projects">
        <ButtonUI
          label="More"
          :handle-click="() => {}"
          :small="true"
          :icon-right="true"
          :alt-animation="true"
          class="text-sm"
        >
          <IconArrowRight class="w-4 h-4" />
        </ButtonUI>
      </RouterLink>
    </div>
    
    <slot></slot>
  
  </div>
</template>

<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue';
import ButtonUI from '../ui/ButtonUI.vue';

  defineProps({
    title: {
      type: String,
      required: true
    },
    more: {
      type: Boolean,
      default: false
    }
  });
</script>