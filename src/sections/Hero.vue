<template>
  <header class="flex flex-col items-center gap-4">

    <div class="flex justify-center group relative sm:hover:mb-18 transition-all duration-300">

      <img
        src="/images/profile.webp"
        alt="Abdullah Syafiq's Profile Picture"
        fetchpriority="high"
        loading="eager" 
        width="128"
        height="128"
        decoding="async"
        class="rounded-full relative z-10 bg-cover left-0 sm:group-hover:scale-150 transition-all duration-300"
      />

      <div
        class="absolute z-10 -top-32 sm:hover:px-44 opacity-0 sm:group-hover:-top-24 sm:group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden sm:block">
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

      <a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonUI label="Resume" class="mr-2">
          <IconFileDescription />
        </ButtonUI>
      </a>

      <a id="email-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        href="mailto:syafiq.syech@gmail.com"
      >
        <IconMail class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </a>

      <a id="github-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        href="https://github.com/SyafiqSyech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithub class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </a>

      <a id="linkedin-link"
        class="py-3 px-4 sm:hover:px-6 sm:hover:bg-background-icon-hover rounded-lg group relative cursor-pointer transition-all"
        href="https://www.linkedin.com/in/abdullahsyafiq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedin class="stroke-icon-secondary sm:group-hover:stroke-primary transition-all" />
      </a>

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