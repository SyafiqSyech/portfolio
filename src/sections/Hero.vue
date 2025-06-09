<template>
  <div class="flex flex-col items-center">

    <div class="flex items-center justify-center group relative mb-4 hover:mb-12 transition-all duration-300">
      
      <div class="w-32 aspect-square rounded-full relative z-10 bg-cover left-0 group-hover:scale-120 transition-all duration-300" style="background-image: url('/src/assets/Profile.png');"></div>
      
      <div class="absolute z-10 -top-24 hover:px-44 opacity-0 group-hover:-top-18 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <IconCrown class="w-16 h-16 stroke-accent" />
     </div>

    </div>

    <div class="relative z-10 text-center flex flex-col items-center gap-4">

      <div>
        <div class="font-medium">Abdullah Syafiq</div>
        <div class="font-medium text-2xl">Software Engineer</div>
      </div>

      <div class="flex gap-3 justify-center items-center">
        <div class="w-2 aspect-square rounded-full bg-accent">
          <div class="w-2 aspect-square rounded-full bg-accent animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        </div>
        <div class="text-secondary">South Jakarta, Indonesia</div>
      </div>

      <div class="flex items-center">

        <ButtonUI
          label="Resume"
          :handle-click="() => {}"
          class="mr-2"
        >
          <IconFileDescription />
        </ButtonUI>
        
        <div class="py-3 px-4 hover:px-6 hover:bg-background-secondary rounded-lg group relative cursor-pointer transition-all">
          <HoverLabel label="Email" :external="true" />
          <IconMail
            class="stroke-secondary group-hover:stroke-primary transition-all"
          />
        </div>
        
        <div class="py-3 px-4 hover:px-6 hover:bg-background-secondary rounded-lg group relative cursor-pointer transition-all">
          <HoverLabel label="Github" :external="true" />
          <IconBrandGithub
            class="stroke-secondary group-hover:stroke-primary transition-all"
          />
        </div>

        <div class="py-3 px-4 hover:px-6 hover:bg-background-secondary rounded-lg group relative cursor-pointer transition-all">
          <HoverLabel label="Linkedin" :external="true" />
          <IconBrandLinkedin
            class="stroke-secondary group-hover:stroke-primary transition-all"
          />
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconCrown, IconFileDescription, IconMail } from '@tabler/icons-vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import HoverLabel from '../components/ui/HoverLabel.vue';
</script>