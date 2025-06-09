<template>
  <div class="fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center pointer-events-none">
    <div 
      class="absolute max-sm:bottom-4 sm:top-4 p-2 sm:p-2 bg-background flex justify-center items-center border-[.1rem] border-border rounded-lg pointer-events-auto"
      style="box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    >
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Home" />
        <IconHome
          class=""
        />
      </div>
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Projects" />
        <IconFolders
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full"></div>
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Email" :external="true" />
        <IconMail
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Github" :external="true" />
        <IconBrandGithub
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Linkedin" :external="true" />
        <IconBrandLinkedin
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full"></div>
      <div class="flex justify-center items-center hover:bg-background-secondary sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all">
        <HoverLabel label="Theme" />
        <IconSunHigh
        class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconFolders, IconHome, IconLayoutGrid, IconMail, IconSunHigh } from '@tabler/icons-vue';
import HoverLabel from '../../components/ui/HoverLabel.vue';
</script>