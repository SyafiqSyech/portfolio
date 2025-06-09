<template>
  <div 
    class="cursor-pointer border-[.1rem] border-border bg-background-button hover:bg-border transition-all rounded-lg flex justify-center items-center font-medium"
    :class="[
      iconRight ? 'flex-row-reverse' : 'flex-row',
      small ? 'px-2.5 py-1.5 gap-2' : 'px-4 py-3 gap-3'
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