<template>
  <nav class="flex items-center gap-2 text-sm text-secondary transition-colors">
    <template v-for="(item, index) in items.slice(0, -1)" :key="index">
      <RouterLink
        :to="item.to || '/notfound'"
        class="sm:hover:text-primary transition-colors"
      >
        {{ item.label }}
      </RouterLink>
      <IconChevronRight class="w-4 h-4" />
    </template>
    <span class="text-primary transition-colors">{{ items[items.length - 1].label }}</span>
  </nav>
</template>

<script lang="ts" setup>
import { IconChevronRight } from '@tabler/icons-vue';

defineProps({
  items: {
    type: Array as () => { label: string | undefined; to?: string }[],
    required: true
  }
});
</script>