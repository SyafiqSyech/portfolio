<template>
  <div
    class="absolute pointer-events-none border-[.1rem] border-border bg-background px-1.5 py-0.5 gap-1.5 text-sm font-medium rounded-lg left-1/2 -translate-x-1/2 opacity-0 -top-4 transition-all z-50 flex items-center text-secondary"
    :class="
      [
        props.group ? 'group' :'group-hover:opacity-100 group-hover:blur-none',
        props.group ? 'group' :'group-hover:-top-6',
      ]
    "
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