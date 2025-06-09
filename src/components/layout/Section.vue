<template>
  <div class="">

    <div class="font-medium text-2xl pb-8" :class="project ? 'flex justify-between items-center' : ''">
      {{ title }}
      <ButtonUI
        v-if="project"
        label="More"
        :handle-click="() => {}"
        :small="true"
        :icon-right="true"
        class="text-sm"
      >
        <IconArrowRight class="w-4 h-4" />
      </ButtonUI>
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
    project: {
      type: Boolean,
      default: false
    }
  });
</script>