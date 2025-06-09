<template>
  <div :id="id" class="border-[.1rem] border-border bg-background-secondary rounded-lg p-4 cursor-pointer hoverMouseFollower">
    
    <div class="sm:flex sm:flex-row-reverse justify-between items-center">
      <div class="text-secondary text-sm">
        {{ date }}
      </div>
      <div class="font-medium">
        {{ company }}
      </div>
    </div>

    <div class="text-secondary mt-1">
      {{ role }}
    </div>
    
    <div class="sm:hidden text-sm mt-4">
      <ButtonUI
        label="Learn More"
        :handle-click="() => {}"
        :small="true"
        :iconRight="true"
      >
        <IconArrowRight class="w-4 h-4" />
      </ButtonUI>
    </div>

  </div>
</template>

<script setup lang="ts">
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