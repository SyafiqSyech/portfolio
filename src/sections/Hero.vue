<template>
  <div class="flex flex-col items-center">

    <div class="flex items-center justify-center group relative mb-4 hover:mb-12 transition-all duration-300">
      
      <div class="w-32 aspect-square rounded-full relative z-10 bg-cover left-0 group-hover:scale-120 transition-all duration-300" style="background-image: url('/src/assets/Profile.png');"></div>
      
      <div class="absolute z-10 -top-24 opacity-0 blur-xs group-hover:-top-16 group-hover:blur-none group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-primary icon icon-tabler icons-tabler-outline icon-tabler-crown"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" /></svg>
     </div>

    </div>

    <div class="relative z-10 text-center flex flex-col items-center gap-4">

      <div>
        <div class="font-medium">Abdullah Syafiq</div>
        <div class="font-medium text-2xl">Software Engineer</div>
      </div>

      <div class="flex gap-3 justify-center items-center">
        <div class="w-2 aspect-square rounded-full bg-orange-300">
          <div class="w-2 aspect-square rounded-full bg-orange-300 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        </div>
        <div class="text-secondary">South Jakarta, Indonesia</div>
      </div>

      <ButtonUI
        label="Resume"
        :handle-click="() => {}"
      >
        <IconFileDescription />
      </ButtonUI>

      <!-- <div class="flex gap-6 justify-center items-center mt-8">

        <div class="p-2 cursor-pointer bg-clip-padding border-2 border-primary-light hover:bg-primary-light transition-all rounded-md flex items-center text-sm font-medium gap-1">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-primary icon icon-tabler icons-tabler-outline icon-tabler-file-description"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
          Resume
        </div>

        <div class="relative group">
          <HoverLabel label="Email" />
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-secondary hover:stroke-primary transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
        </div>
        
        <div class="relative group">
          <HoverLabel label="Linkedin" />
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-secondary hover:stroke-primary transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
        </div>
        
        <div class="relative group">
          <HoverLabel label="Github" />
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-secondary hover:stroke-primary transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </div>

      </div> -->

    </div>
  </div>
</template>

<script setup lang="ts">
import { IconFileDescription } from '@tabler/icons-vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
// import HoverLabel from '../components/ui/HoverLabel.vue';
</script>