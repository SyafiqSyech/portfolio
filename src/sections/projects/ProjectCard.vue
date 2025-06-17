<template>
  <RouterLink
    :id="id"
    :to="`/projects/${id}`"
    class="flex flex-col gap-4 border-[.1rem] border-border bg-background-card rounded-2xl p-4 group cursor-pointer sm:hover:border-border-hover sm:hover:bg-background-card-hover transition-all"
  >

    <div>
      <div
        :style="{ backgroundColor: color }"
        class="aspect-square rounded-lg flex items-center justify-center p-6 relative"
      >
        <img 
          :src="`images/${id}/${image}`"
          :alt="`${title} - ${summary} | Abdullah Syafiq's Portfolio Project`"
          class="rounded-lg sm:group-hover:scale-105 sm:group-hover:shadow-lg duration-300"
          :class="phone ? 'h-full' : 'w-full'"
        />
      </div>
    </div>

    <div>
      <h2 class="font-title mb-1 transition-all">
        {{ title }}
      </h2>
      <p class="font-text text-secondary">
        {{ summary }}
      </p>
    </div>

    <div class="sm:flex sm:flex-wrap text-sm gap-2">
      <ButtonUI
        label='View Details'
        :small="true"
        :icon-right="true"
        class="sm:hidden"
      >
        <IconArrowRight class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        :id="`source-code-${id}`"
        v-if="links?.github"
        label='Source Code'
        :handle-click="() => openLink(links?.github)"
        :small="true"
        class="hidden sm:flex"
      >
        <IconCode class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        :id="`website-${id}`"
        v-if="links?.website"
        label='Website'
        :handle-click="() => openLink(links?.website)"
        :small="true"
        class="hidden sm:flex"
      >
        <IconLink class="w-4 h-4" />
      </ButtonUI>
    </div>

  </RouterLink>
</template>

<script setup lang="ts">
import ButtonUI from '../../components/ui/ButtonUI.vue';
import { RouterLink } from 'vue-router';
import { IconArrowRight, IconCode, IconLink } from '@tabler/icons-vue';

interface Props {
  id: string;
  title: string;
  image: string;
  summary: string;
  links?: {
    github?: string;
    website?: string;
  };
  color: string;
  phone?: boolean;
}

defineProps<Props>();

const openLink = (url: string | undefined) => {
  if (!url) return;
  window.open(url, '_blank');
};
</script>