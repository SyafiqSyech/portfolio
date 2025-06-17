<template>
  <div>

    <div class="flex flex-col sm:flex-row-reverse sm:items-center justify-between">
      <div class="font-text text-sm text-secondary transition-colors">
        {{ date }}
      </div>
      <div class="font-title mt-1 transition-colors">
        {{ institution }}
      </div>
    </div>
    <div class="font-text text-secondary transition-colors mt-1">
      {{ degree }}
    </div>
    
  </div>
</template>

<script setup lang="ts">
interface Props {
  institution: string;
  degree: string;
  date: string;
}

defineProps<Props>();
</script>