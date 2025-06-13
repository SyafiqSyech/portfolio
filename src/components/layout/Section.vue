<template>
  <div class="">

    <div class="font-header text-2xl mb-8" :class="more ? 'flex justify-between items-center' : ''">
      {{ title }}
      <RouterLink v-if="more" to="/projects">
        <ButtonUI
          label="More"
          :handle-click="() => {}"
          :small="true"
          :icon-right="true"
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