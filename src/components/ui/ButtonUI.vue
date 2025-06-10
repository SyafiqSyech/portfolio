<template>
  <div 
    class="cursor-pointer border-[.1rem] font-label rounded-lg flex justify-center items-center gap-2 transition-all border-border bg-background-button hover:bg-background-button-hover hover:border-background-button-hover group-hover:border-border-hover group-hover:bg-background-button-cardhover group-hover:hover:bg-background-button-cardhover-hover group-hover:hover:border-background-button-cardhover-hover"
    :class="[
      iconRight ? 'flex-row-reverse hover:gap-4' : 'flex-row hover:px-4',
      small ? 'px-2.5 py-1.5' : 'px-4 py-3 hover:px-6'
    ]"
    @click="props.handleClick"
  >
    <slot></slot>
    <span>{{ props.label }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  handleClick: () => void
  small?: boolean
  iconRight?: boolean
}

const props = defineProps<Props>();
</script>