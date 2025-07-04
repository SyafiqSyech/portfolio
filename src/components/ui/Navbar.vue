<template>
  <div id="navbar" class="fixed top-0 left-0 w-full z-40 flex items-center justify-center pointer-events-none">
    
    <Transition name="back" mode="out-in">
      <div
        v-if="showBackButton"
        class="absolute bottom-23 sm:bottom-24 pointer-events-auto text-sm"
        style="box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
      >
        <ButtonUI
          label="Back"
          :handle-click="() => router.back()"
          :small="true"
          :alt-animation="true"
        >
          <IconArrowLeft class="w-4 h-4" />
        </ButtonUI>
      </div>
    </Transition>

    <div 
      class="absolute bottom-4 py-1.5 px-1 sm:p-2 bg-background flex justify-center items-center border-[.1rem] border-border rounded-lg pointer-events-auto transition-all"
      style="box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    >

      <RouterLink
        to="/"
        id="home-link"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative cursor-pointer transition-all"
      >
        <div
          class="absolute border-b-2 border-primary box-content w-1/2 bottom-0 transition-all"
          :class="onPage === 'home' ? '' : 'hidden'"
        >
        </div>
        <HoverLabel label="Home" />
        <IconHome
          class="sm:group-hover:stroke-primary transition-all"
          :class="onPage === 'home' ? 'stroke-primary' : 'stroke-icon-secondary'"
        />
      </RouterLink>

      <RouterLink
        to="/projects"
        id="projects-link"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative transition-all"
      >
        <div
          class="absolute border-b-2 border-primary box-content w-1/2 bottom-0 transition-all"
          :class="onPage === 'projects' ? '' : 'hidden'"
        >
        </div>
        <HoverLabel label="Projects" />
        <IconFolders
          class="sm:group-hover:stroke-primary transition-all"
          :class="onPage === 'projects' ? 'stroke-primary' : 'stroke-icon-secondary'"
        />
      </RouterLink>

      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>

      <a
        id="email-navbar-link"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative cursor-pointer transition-all"
        href="mailto:syafiq.syech@gmail.com"
      >
        <HoverLabel label="Email" :external="true" />
        <IconMail
          class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all"
        />
      </a>

      <a
        id="github-navbar-link"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative cursor-pointer transition-all"
        href="https://github.com/SyafiqSyech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLabel label="Github" :external="true" />
        <IconBrandGithub
          class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all"
        />
      </a>

      <a
        id="linkedin-navbar-link"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative cursor-pointer transition-all"
        href="https://www.linkedin.com/in/abdullahsyafiq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLabel label="Linkedin" :external="true" />
        <IconBrandLinkedin
          class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all"
        />
      </a>

      <div class="w-[.1rem] mx-2 h-8 bg-border rounded-full transition-all"></div>
      
      <div
        id="theme-toggle"
        class="flex justify-center items-center rounded-lg sm:hover:bg-background-icon-hover py-2 px-4 sm:py-2 sm:sm:hover:px-6 group relative cursor-pointer transition-all"
        @click="changeTheme"
      >
        <HoverLabel :label="currentTheme === 'dark' ? 'Dark' : 'Light'" />
        <IconSunHigh v-if="currentTheme === 'light'"
          class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all"
        />
        <IconMoon v-else
          class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IconBrandGithub, IconBrandLinkedin, IconFolders, IconHome, IconMail, IconSunHigh, IconMoon, IconArrowLeft } from '@tabler/icons-vue';
import HoverLabel from './HoverLabel.vue';
import ButtonUI from './ButtonUI.vue';

const route = useRoute();
const router = useRouter();

const onPage = ref(route.name);

watch(() => route.name, (newPage) => {
  onPage.value = newPage;
});

onMounted(() => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.height = `${window.innerHeight}px`;
  }
  
  window.addEventListener('resize', () => {
    if (navbar) {
      navbar.style.height = `${window.innerHeight}px`;
    }
  });
});

const currentTheme = ref(localStorage.getItem('theme') || 'light');

const changeTheme = () => {
  const theme = localStorage.getItem('theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme.value = newTheme;
};

const showBackButton = ref(false);
watch(() => route.name, (newPage) => {
  showBackButton.value = newPage !== 'home' && newPage !== 'projects' && newPage !== 'experiences';
});
</script>

<style scoped>
.back-enter-from,
.back-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.back-leave-active {
  transition: opacity 150ms cubic-bezier(0.32, 0, 0.67, 0), transform 150ms cubic-bezier(0.32, 0, 0.67, 0);
}
.back-enter-active {
  transition: opacity 600ms cubic-bezier(0.33, 1, 0.68, 1), transform 600ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>