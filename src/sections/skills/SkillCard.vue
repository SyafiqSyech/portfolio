<template>
  <div
    class="font-label text-secondary border-[.1rem] border-border bg-background-card group sm:hover:bg-background-card-hover sm:hover:border-border-hover sm:hover:text-primary transition-all rounded-lg text-sm p-3 sm:p-4 sm:text-base"
  >
    <p class="transition-all">
      {{ name }} <span class="font-text text-sm">{{ note ? `(${note})` : '' }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String,
    default: ''
  }
});

</script>