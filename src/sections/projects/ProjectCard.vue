<template>
  <div class="relative group">

    <ColorBlur :color="color" />

    <div class="mb-4 lg:px-2 group-hover:px-0 transition-all duration-300">
      <div class="h-64 rounded-sm overflow-hidden relative">
        <div
          class="w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-300"
          :style="`background-image: url('/src/assets/${image}')`"
        ></div>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4 justify-between lg:px-2 relative">  
      
      <div>
        <div class="font-medium">
          {{ title }}
        </div>
        <div class="italic text-sm">
          {{ role }}
        </div>
      </div>

      <div class="flex flex-wrap gap-1.5 text-xs">
        <!-- <div
          v-for="(tool, idx) in tools"
          :key="idx"
          class="bg-clip-padding bg-primary-light font-medium rounded-md px-2 py-1"
        >
          {{ tool }}
        </div> -->
        <div
          v-for="(tool, idx) in tools"
          :key="idx"
          class="bg-clip-padding border-2 border-primary-light bg-background rounded-md px-1.5 py-0.5"
        >
          {{ tool }}
        </div>
      </div>

      <div class="text-sm grid grid-cols-[min-content_auto] gap-2">
        <template
          v-for="(desc, idx) in description"
          :key="idx"
          >
          <div>🟄</div>
          <div>
            {{ desc }}
          </div>
        </template>
      </div>

      <!-- <div class="flex gap-2 text-sm">

        <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-primary-light bg-background hover:bg-[#dedede] transition-all rounded-md flex items-center text-sm font-medium gap-1">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-primary transition-all icon icon-tabler icons-tabler-outline icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>
          Gallery
        </div>

        <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-primary-light bg-background hover:bg-[#dedede] transition-all rounded-md flex items-center text-sm font-medium gap-1">
          <svg xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-primary icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
          Source Code
        </div>

        <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-primary-light bg-background hover:bg-[#dedede] transition-all rounded-md flex items-center text-sm font-medium gap-1">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-primary icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
          Website
        </div>

      </div> -->

    </div>

  </div>
</template>

<script setup lang="ts">
import ColorBlur from '../../components/ui/ColorBlur.vue';

interface Props {
  title: string;
  image: string;
  role: string;
  tools: string[];
  description: string[];
  links?: {
    github?: string;
    website?: string;
  };
  color: string;
}

defineProps<Props>();
</script>