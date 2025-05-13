<template>
  <div class="flex flex-col justify-center relative lg:px-2 group">
    
    <ColorBlur :color="color" />
    
    <div class="grid sm:grid-cols-2 gap-x-4 relative z-10">
      <div class="font-medium">
        {{ institution }}
      </div>
      <div class="text-sm sm:text-base sm:text-end">
        {{ date }}
      </div>
      <div class="italic text-sm col-span-2">
        {{ degree }}
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import ColorBlur from '../../components/ui/ColorBlur.vue';

interface Props {
  institution: string;
  degree: string;
  date: string;
  color: string;
}

defineProps<Props>();
</script>