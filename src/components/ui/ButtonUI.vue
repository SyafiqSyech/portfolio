<template>
  <div
    class="cursor-pointer border-[.1rem] font-label rounded-lg flex justify-center items-center gap-2 transition-all border-border bg-background-button sm:hover:bg-background-button-hover sm:hover:border-background-button-hover sm:group-hover:border-border-hover sm:group-hover:bg-background-button-cardhover sm:group-hover:hover:bg-background-button-cardhover-hover sm:group-hover:hover:border-background-button-cardhover-hover"
    :class="[
      iconRight ? 'flex-row-reverse' : 'flex-row',
      small ? 'px-3 py-1.5' : 'px-6 py-3 sm:hover:px-8',
      altAnimation ? 'sm:hover:gap-4' : 'sm:hover:px-4',
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
  },
  altAnimation: {
    type: Boolean,
    default: false
  }
});
</script>