<template>
  <div :class="`absolute w-full h-full bg-${color}-500/10 rounded-2xl left-0 top-0 z-0 blur-lg`"></div>
</template>

<script setup lang="ts">
  interface Props {
    color: string;
  }

  defineProps<Props>();
</script>