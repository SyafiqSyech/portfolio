<template>
  <div class="fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center pointer-events-none">
    <div 
      class="absolute bottom-4 p-2 sm:p-2 bg-background flex justify-center items-center border-[.1rem] border-border rounded-lg pointer-events-auto transition-all"
      style="box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    >
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        onclick=""
      >
        <HoverLabel label="Home" />
        <IconHome
          class=""
        />
      </div>
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        onclick=""
      >
        <HoverLabel label="Projects" />
        <IconFolders
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('mailto:syafiq.syech@gmail.com', false)"
      >
        <HoverLabel label="Email" :external="true" />
        <IconMail
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('https://github.com/SyafiqSyech', true)"
      >
        <HoverLabel label="Github" :external="true" />
        <IconBrandGithub
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('https://www.linkedin.com/in/abdullahsyafiq/', true)"
      >
        <HoverLabel label="Linkedin" :external="true" />
        <IconBrandLinkedin
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover sm:py-2 px-3 sm:px-4 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="changeTheme"
      >
        <HoverLabel :label="currentTheme === 'dark' ? 'Dark' : 'Light'" />
        <IconSunHigh v-if="currentTheme === 'light'"
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
        <IconMoon v-else
          class="stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconBrandGithub, IconBrandLinkedin, IconFolders, IconHome, IconMail, IconSunHigh, IconMoon } from '@tabler/icons-vue';
import HoverLabel from '../../components/ui/HoverLabel.vue';

const currentTheme = ref(document.body.getAttribute('data-theme'));

const changeTheme = () => {
  const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  currentTheme.value = newTheme;
};

const openPage = (url: string, onBlank: boolean) => {
  if (onBlank) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
};
</script>