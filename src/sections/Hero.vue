<template>
  <header class="flex flex-col items-center gap-4">

    <div class="flex justify-center group relative sm:hover:mb-12 transition-all duration-300">

      <img
        src="/images/profile.webp"
        alt="Abdullah Syafiq's Profile Picture"
        loading="lazy"
        class="w-32 aspect-square rounded-full relative z-10 bg-cover left-0 sm:group-hover:w-48 transition-all duration-300"
      />

      <div
        class="absolute z-10 -top-24 sm:hover:px-44 opacity-0 sm:group-hover:-top-18 sm:group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden sm:block">
        <IconCrown class="w-16 h-16 stroke-accent" />
      </div>

    </div>

    <div class="text-center">
      <div class="font-title">Abdullah Syafiq</div>
      <div class="font-header text-2xl">Software Engineer</div>
    </div>

    <div class="flex gap-3 items-center">
      <div class="w-2 aspect-square rounded-full bg-accent">
        <div class="w-2 aspect-square rounded-full bg-accent animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      </div>
      <div class="text-secondary">South Jakarta, Indonesia</div>
    </div>

    <nav class="flex items-center">

      <ButtonUI label="Resume" :handle-click="openPdf" class="mr-2">
        <IconFileDescription />
      </ButtonUI>

      <div id="email-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        @click="openPage('mailto:syafiq.syech@gmail.com', false)">
        <IconMail class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </div>

      <div id="github-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        @click="openPage('https://github.com/SyafiqSyech', true)">
        <IconBrandGithub class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </div>

      <div id="linkedin-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        @click="openPage('https://www.linkedin.com/in/abdullahsyafiq/', true)">
        <IconBrandLinkedin class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </div>

    </nav>

    <div class="text-secondary text-center text-sm leading-relaxed relative">
      <!-- Hello! I'm <span class="text-primary transition-all">Syafiq</span>, I am writing about myself to fill this section. <br /> -->
      Email me at
      <span class="cursor-pointer sm:hover:underline sm:hover:underline-offset-1 relative">
        <span id="email-copy" class="transition-colors" style="color: var(--color-primary);" @click="copyEmail">
          syafiq.syech@gmail.com
        </span>
        <div id="email-copy-success" style="display: none;" class="w-full h-full absolute left-0 top-0"></div>
      </span>
    </div>

  </header>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconCrown, IconFileDescription, IconMail } from '@tabler/icons-vue';
import ButtonUI from '../components/ui/ButtonUI.vue';

const openPage = (url: string, onBlank: boolean) => {
  if (onBlank) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
};

const openPdf = () => {
  const pdfUrl = '/CV.pdf';
  window.open(pdfUrl, '_blank');
};

const copyEmail = () => {
  const email = 'syafiq.syech@gmail.com';
  navigator.clipboard.writeText(email)
    .then(() => {
      const emailCopyElement = document.getElementById('email-copy');
      const successElement = document.getElementById('email-copy-success');

      if (emailCopyElement && successElement) {
        emailCopyElement.style.color = 'var(--color-accent)';
        successElement.style.display = 'block';
        setTimeout(() => {
          emailCopyElement.style.color = 'var(--color-primary)';
          successElement.style.display = 'none';
        }, 1000);
      }
    })
    .catch(err => {
      console.error('Failed to copy email: ', err);
      alert('Failed to copy email.');
    });
};
</script>