<template>
  <div class="fixed top-0 left-0 h-screen w-full z-50 flex items-center justify-center pointer-events-none transition-colors">
    
    <div 
      class="absolute bottom-2 sm:bottom-4 p-2 bg-background flex justify-center items-center border-[.1rem] border-border rounded-lg pointer-events-auto transition-all"
      style="box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    >

      <RouterLink
        to="/"
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative cursor-pointer transition-all"
      >
        <div
          class="absolute border-b-2 border-primary box-content w-1/2 bottom-0 transition-all"
          :class="onPage === 'home' ? '' : 'hidden'"
        >
        </div>
        <HoverLabel label="Home" />
        <IconHome
          class="max-sm:w-6 max-sm:h-6 group-hover:stroke-primary transition-all"
          :class="onPage === 'home' ? 'stroke-primary' : 'stroke-secondary'"
        />
      </RouterLink>

      <RouterLink
        to="/projects"
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative transition-all"
      >
        <div
          class="absolute border-b-2 border-primary box-content w-1/2 bottom-0 transition-all"
          :class="onPage === 'projects' ? '' : 'hidden'"
        >
        </div>
        <HoverLabel label="Projects" />
        <IconFolders
          class="max-sm:w-6 max-sm:h-6 group-hover:stroke-primary transition-all"
          :class="onPage === 'projects' ? 'stroke-primary' : 'stroke-secondary'"
        />
      </RouterLink>

      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>

      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('mailto:syafiq.syech@gmail.com', false)"
      >
        <HoverLabel label="Email" :external="true" />
        <IconMail
          class="max-sm:w-6 max-sm:h-6 stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>

      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('https://github.com/SyafiqSyech', true)"
      >
        <HoverLabel label="Github" :external="true" />
        <IconBrandGithub
          class="max-sm:w-6 max-sm:h-6 stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>

      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="openPage('https://www.linkedin.com/in/abdullahsyafiq/', true)"
      >
        <HoverLabel label="Linkedin" :external="true" />
        <IconBrandLinkedin
          class="max-sm:w-6 max-sm:h-6 stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>

      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>
      
      <div
        class="flex justify-center items-center rounded-lg hover:bg-background-icon-hover px-3 py-1.5 sm:px-4 sm:py-2 sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="changeTheme"
      >
        <HoverLabel :label="currentTheme === 'dark' ? 'Dark' : 'Light'" />
        <IconSunHigh v-if="currentTheme === 'light'"
          class="max-sm:w-6 max-sm:h-6 stroke-secondary group-hover:stroke-primary transition-all"
        />
        <IconMoon v-else
          class="max-sm:w-6 max-sm:h-6 stroke-secondary group-hover:stroke-primary transition-all"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IconBrandGithub, IconBrandLinkedin, IconFolders, IconHome, IconMail, IconSunHigh, IconMoon } from '@tabler/icons-vue';
import HoverLabel from '../../components/ui/HoverLabel.vue';

const route = useRoute();

const onPage = ref(route.name);

watch(() => route.name, (newPage) => {
  onPage.value = newPage;
});

const currentTheme = ref(localStorage.getItem('theme') || 'light');

const changeTheme = () => {
  const theme = localStorage.getItem('theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
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

<style scoped>
</style>