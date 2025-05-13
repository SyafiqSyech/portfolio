<template>
  <div class="flex flex-col justify-center relative lg:px-2 hover:px-0 transition-all duration-300 group">
    
    <ColorBlur :color="color" />
    
    <div class="grid sm:grid-cols-2 gap-x-4 relative z-10">
      <div class="font-medium">
        {{ company }}
      </div>
      <div class="text-sm sm:text-base sm:text-end">
        {{ date }}
        <span v-if="location" class="sm:hidden"> / {{ location }}</span>
      </div>
      <div class="italic text-sm">
        {{ role }}
      </div>
      <div class="italic text-sm text-end hidden sm:block">
        {{ location }}
      </div>
    </div>
    
    <div class="absolute h-6 z-10 text-xl -left-4 opacity-0 -rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-left-10 pointer-events-none">🟄</div>
    <div class="absolute h-6 z-10 text-xl -right-4 opacity-0 rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-right-10 pointer-events-none">🟄</div>

  </div>
</template>

<script setup lang="ts">
import ColorBlur from '../../components/ui/ColorBlur.vue';

interface Props {
  company: string;
  role: string;
  date: string;
  location?: string;
  color: string;
}

defineProps<Props>();
</script>