<template>
  <div
    class="cursor-pointer border-[.1rem] font-label rounded-lg flex justify-center items-center gap-2 transition-all border-border bg-background-button hover:bg-background-button-hover hover:border-background-button-hover group-hover:border-border-hover group-hover:bg-background-button-cardhover group-hover:hover:bg-background-button-cardhover-hover group-hover:hover:border-background-button-cardhover-hover"
    :class="[
      iconRight ? 'flex-row-reverse hover:gap-4' : 'flex-row hover:px-4',
      small ? 'px-3 py-1.5' : 'px-6 py-3 hover:px-8'
    ]"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  label: {
    type: String,
    default: ''
  },
  handleClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {}
  },
  small: {
    type: Boolean,
    default: false
  },
  iconRight: {
    type: Boolean,
    default: false
  }
});
</script>