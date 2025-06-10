<template>
  <div :id="id" class="flex flex-col gap-4 border-[.1rem] border-border bg-background-card rounded-lg p-4 group cursor-pointer hover:border-border-hover hover:bg-background-card-hover transition-all hoverMouseFollower">

    <div class="aspect-square rounded-lg relative">
      
      <div
        :style="{ backgroundColor: color }"
        class="absolute w-full h-full rounded-lg left-0 bottom-0 z-0 flex items-center justify-center p-3"
      >
        <img 
          :src="'/src/assets/' + image"
          :alt="title + ' thumbnail'" 
          class="rounded-lg group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 group-odd:group-hover:rotate-4 group-even:group-hover:-rotate-4"
          :class="phone ? 'h-full' : 'w-full'"
        />
      </div>

    </div>

    <div>
      <div class="font-title">
        {{ title }}
      </div>
      <div class="font-text text-secondary mt-1">
        {{ summary }}
      </div>
    </div>

    <div class="sm:flex text-sm gap-2">
      <ButtonUI
        label='View Details'
        :handle-click="() => {}"
        :small="true"
        :icon-right="true"
        class="sm:hidden"
      >
        <IconArrowRight class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        label='Gallery'
        :handle-click="() => {}"
        :small="true"
        class="hidden sm:flex hideMouseFollower"
      >
        <IconPhoto class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        v-if="links?.github"
        label='Source Code'
        :handle-click="() => openLink(links?.github)"
        :small="true"
        class="hidden sm:flex hideMouseFollower"
      >
        <IconCode class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        v-if="links?.website"
        label='Website'
         :handle-click="() => openLink(links?.website)"
        :small="true"
        class="hidden sm:flex hideMouseFollower"
      >
        <IconLink class="w-4 h-4" />
      </ButtonUI>
    </div>

  </div>
</template>

<script setup lang="ts">
import ButtonUI from '../../components/ui/ButtonUI.vue';
import { IconArrowRight, IconCode, IconLink, IconPhoto } from '@tabler/icons-vue';

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