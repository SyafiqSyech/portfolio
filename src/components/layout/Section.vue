<template>
  <div class="grid lg:grid-cols-[0_1fr]">

    <div class="font-semibold text-lg pb-16 relative">
      <div class="absolute lg:right-44 xl:right-64 w-full">
        Experience
      </div>
    </div>
    
    <slot></slot>
  
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },
  });
</script>