<template>
  <div :id="id" class="flex flex-col gap-4 border-[.1rem] border-border bg-background-secondary rounded-lg p-4 group cursor-pointer hoverMouseFollower">

    <div class="aspect-square rounded-lg relative">
      
      <div 
        :style="{ backgroundColor: color }"
        class="absolute w-full h-full rounded-lg left-0 bottom-0 z-0 flex items-center justify-center p-8"
      >
        <img 
          :src="'/src/assets/' + image"
          :alt="title + ' thumbnail'" 
          class="rounded-lg group-hover:rotate-6 transition-all duration-300"
          :class="phone ? 'h-full group-hover:translate-x-8' : 'w-full group-hover:-translate-y-8'"
        />
      </div>

    </div>

    <div>
      <div class="font-medium">
        {{ title }}
      </div>
      <div class="text-secondary mt-1">
        {{ summary }}
      </div>
    </div>

    <div class="sm:flex text-sm gap-2">
      <ButtonUI
        label='Learn More'
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
        label='Source Code'
        :handle-click="() => {}"
        :small="true"
        class="hidden sm:flex hideMouseFollower"
      >
        <IconCode class="w-4 h-4" />
      </ButtonUI>
      <ButtonUI
        label='Website'
        :handle-click="() => {}"
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
</script>