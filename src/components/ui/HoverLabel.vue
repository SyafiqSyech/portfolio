<template>
  <div
    class="absolute w-max pointer-events-none border-[.1rem] border-border bg-background text-secondary px-2 py-1 gap-1.5 text-sm font-label rounded-lg left-1/2 -translate-x-1/2 opacity-0 -top-5 transition-[opacity,background-color,border-color,color,top] z-50 flex items-center select-none"
    :class="props.group ? '' :'sm:group-hover:opacity-100 sm:group-hover:blur-none sm:group-hover:-top-9'"
  >
    {{ label }}
    <IconArrowUpRight
      v-if="props.external"
      class="w-4 h-4 stroke-secondary"
    />
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue';

interface Props {
  label: string
  group?: string
  external?: boolean
}

const props = defineProps<Props>();
</script>