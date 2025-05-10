<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center justify-center group relative mb-4 hover:mb-12 transition-all duration-300">
      <div class="absolute w-[120%] h-[120%] bg-orange-500/10 rounded-[100%] top-0 z-0 blur-lg group-hover:bg-yellow-500/10 group-hover:top-12 group-hover:scale-150 transition-all duration-300"></div>
      <div class="w-32 aspect-square rounded-full relative z-10 bg-cover left-0 group-hover:scale-120 transition-all duration-300" style="background-image: url('/src/assets/profile.jpg');"></div>
     <div class="absolute z-10 -top-24 opacity-0 blur-xs group-hover:-top-16 group-hover:blur-none group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="#131313"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-crown"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" /></svg>
     </div>
    </div>
    <div class="relative z-10 text-center">
      <div class="text-heading">Abdullah Syafiq</div>
      <div class="text-heading !text-3xl">Software Engineer</div>
      <div class="italic mt-4">🟄 South Jakarta, Indonesia</div>
      <div class="flex gap-6 justify-center items-center mt-8">
        <div class="p-2 cursor-pointer bg-clip-padding border-2 border-[#131313]/5 hover:bg-[#131313]/5 transition-all rounded-md flex items-center text-sm font-medium gap-1">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#131313"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-description"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
          Resume
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-[#929292] hover:stroke-[#131313] transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-[#929292] hover:stroke-[#131313] transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="stroke-[#929292] hover:stroke-[#131313] transition-all cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </div>
      </div>
    </div>
  </div>

  <div class="py-24 "></div>
  <!-- <div class="py-24 text-center">🟆 🟅 🟄 🞟 🞄 🞟 🟄 🟅 🟆</div> -->
  <!-- <div class="py-24 text-center">🞄&emsp;🞟&emsp;🟄&emsp;🟅&emsp;🟆&emsp;🟅&emsp;🟄&emsp;🞟&emsp;🞄</div> -->

  <div class="grid lg:grid-cols-[0_1fr] gap-4">
    <div class="text-heading pb-16 relative">
      <div class="absolute lg:right-44 xl:right-64 w-full">Experience</div>
    </div>
    <div class="flex flex-col gap-8">
      <div>
        <div class="flex flex-col justify-center relative px-2 hover:px-0 transition-all duration-300 group">
          <div class="absolute w-full h-full bg-purple-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
          <div class="grid sm:grid-cols-2 gap-x-4 relative z-10">
            <div class="font-medium">P.T Periksa Solusi Indonesia</div>
            <div class="text-sm sm:text-base sm:text-end">Feb 2024 - Feb&nbsp;2025<span class="sm:hidden"> / Central Jakarta, Indonesia (Remote)</span></div>
            <div class="italic text-sm">Frontend Developer Intern</div>
            <div class="italic text-sm text-end hidden sm:block">Central Jakarta, Indonesia (Remote)</div>
          </div>
          <div class="absolute h-6 z-10 text-xl -left-4 opacity-0 -rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-left-12 pointer-events-none">🟄</div>
          <div class="absolute h-6 z-10 text-xl -right-4 opacity-0 rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-right-12 pointer-events-none">🟄</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col justify-center relative px-2 hover:px-0 transition-all duration-300 group">
          <div class="absolute w-full h-full bg-yellow-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
          <div class="grid sm:grid-cols-2 gap-x-4 relative z-10">
            <div class="font-medium">Your Company Hopefully :)</div>
            <div class="text-sm sm:text-base sm:text-end">Tomorrow</div>
            <div class="italic text-sm">Software Engineer</div>
          </div>
          <div class="absolute h-6 z-10 text-xl -left-4 opacity-0 -rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-left-12 pointer-events-none">🟄</div>
          <div class="absolute h-6 z-10 text-xl -right-4 opacity-0 rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-right-12 pointer-events-none">🟄</div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-24 "></div>
  <!-- <div class="py-24 text-center">🟆 🟅 🟄 🞟 🞄 🞟 🟄 🟅 🟆</div> -->
  <!-- <div class="py-24 text-center">🞄&emsp;🞟&emsp;🟄&emsp;🟅&emsp;🟆&emsp;🟅&emsp;🟄&emsp;🞟&emsp;🞄</div> -->

  <div class="grid lg:grid-cols-[0_1fr] gap-4">
    <div class="text-heading pb-16 relative">
      <div class="absolute lg:right-44 xl:right-64 w-full">Projects</div>
    </div>
    
    <div class="flex flex-col gap-8 justify-center">
      <div class="relative group transition-all duration-300">
        <div class="absolute w-full h-full bg-orange-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
        <div class="w-full flex flex-col gap-4 transition-all duration-300 justify-between relative z-10">
          <div class="transition-all duration-300">
            <div class="w-full aspect-video rounded-sm overflow-hidden">
              <div class="w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-300" style="background-image: url('/src/assets/test2.png');"></div>
            </div>
          </div>
          <div class="relative left-0 transition-all duration-300">
            <div class="font-medium">Mod Manager (In Progress)</div>
            <div class="italic text-sm">Fullstack Developer</div>
          </div>
          <div class="flex flex-wrap gap-1 text-xs">
            <div class="border-2 border-[#131313]/5 bg-[#f4f4f4] bg-clip-padding rounded-md px-1.5 py-0.5">React</div>
            <div class="border-2 border-[#131313]/5 bg-[#f4f4f4] bg-clip-padding rounded-md px-1.5 py-0.5">Typescript</div>
            <div class="border-2 border-[#131313]/5 bg-[#f4f4f4] bg-clip-padding rounded-md px-1.5 py-0.5">TailwindCSS</div>
          </div>
          <div class="text-sm grid grid-cols-[min-content_auto] gap-2">
            <div>🟄</div><div>Developed a website for managing Minecraft mods using Modrinths API.</div>
            <div>🟄</div><div>Made custom React hooks for API integration and debouncing inputs, and created API service layers from scratch.</div>
          </div>
          <!-- <div class="flex flex-wrap gap-2 text-sm">
            <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-[#131313]/5 hover:bg-[#131313]/5 transition-all rounded-md flex items-center text-sm font-medium gap-2">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#131313"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>
              Pictures
            </div>
            <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-[#131313]/5 hover:bg-[#131313]/5 transition-all rounded-md flex items-center text-sm font-medium gap-2">
              <svg xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#131313"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
              Source Code
            </div>
            <div class="py-1 px-2 cursor-pointer bg-clip-padding border-2 border-[#131313]/5 hover:bg-[#131313]/5 transition-all rounded-md flex items-center text-sm font-medium gap-2">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#131313"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
              Website
            </div>
          </div> -->
        </div>
      </div>
      <div class="relative group transition-all duration-300">
        <div class="absolute w-full h-full bg-blue-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
        <div class="w-full flex flex-col gap-4 transition-all duration-300 justify-between relative z-10">
          <div class="transition-all duration-300">
            <div class="w-full aspect-video rounded-sm overflow-hidden">
              <div class="w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-300" style="background-image: url('/src/assets/test.png');"></div>
            </div>
          </div>
          <div class="relative left-0 transition-all duration-300">
            <div class="font-medium">Layzy</div>
            <div class="italic text-sm">Project Leader / Frontend Developer</div>
          </div>
          <div class="text-sm">Website layout library that you can edit and copy paste to your project</div>
          <div class="flex flex-wrap gap-1 text-xs">
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">React</div>
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">React Libraries</div>
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Typescript</div>
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">TailwindCSS</div>
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Vite</div>
            <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Netlify</div>
          </div>
          <div class="flex flex-wrap gap-1 text-sm">
            
          </div>
        </div>
      </div>

      <div class="p-2 cursor-pointer bg-clip-padding border-2 border-[#131313]/5 hover:bg-[#131313]/5 transition-all rounded-md flex justify-center items-center text-sm font-medium gap-1">
        More Projects
        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
      </div>
    </div>

    <!-- <div class="flex flex-col gap-8">
      <div class="flex items-center relative group transition-all duration-300 px-2 hover:px-0">
        <div class="absolute w-full h-full bg-orange-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
        <div class="w-full flex flex-col sm:flex-row-reverse gap-4 group-hover:gap-6 transition-all duration-300 justify-between relative z-10">
          <div class="sm:w-1/2 transition-all duration-300">
            <div class="w-full aspect-video sm:h-44 rounded-sm overflow-hidden">
              <div class="w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-300" style="background-image: url('/src/assets/test.png');"></div>
            </div>
          </div>
          <div class="sm:w-1/2 relative left-0 transition-all duration-300">
            <div>Mod Manager (In Progress)</div>
            <div class="italic text-sm">Fullstack Developer</div>
            <div class="text-sm py-2 sm:py-4">Web for managing Minecraft Mods using Modrinth API</div>
            <div class="flex flex-wrap gap-1 text-xs">
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">React</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Typescript</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">TailwindCSS</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Toiii</div>
            </div>
          </div>
        </div>
        <div class="absolute h-6 z-10 text-xl -left-4 opacity-0 -rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-left-12 pointer-events-none">🟄</div>
        <div class="absolute h-6 z-10 text-xl -right-4 opacity-0 rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-right-12 pointer-events-none">🟄</div>
      </div>
      <div class="flex items-center relative group transition-all duration-300 px-2 hover:px-0">
        <div class="absolute w-full h-full bg-blue-500/10 rounded-2xl left-0 top-0 z-0 blur-lg"></div>
        <div class="w-full flex flex-col sm:flex-row-reverse gap-4 group-hover:gap-6 transition-all duration-300 justify-between relative z-10">
          <div class="sm:w-1/2 transition-all duration-300">
            <div class="w-full aspect-video sm:h-44 rounded-sm overflow-hidden">
              <div class="w-full h-full bg-center bg-cover group-hover:scale-105 transition-all duration-300" style="background-image: url('/src/assets/test2.png');"></div>
            </div>
          </div>
          <div class="sm:w-1/2 relative left-0 transition-all duration-300">
            <div>Layzy</div>
            <div class="italic text-sm">Project Leader / Frontend Developer</div>
            <div class="text-sm py-2 sm:py-4">Website layout library that you can edit and copy paste to your project</div>
            <div class="flex flex-wrap gap-1 text-xs">
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">React</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">React Libraries</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Typescript</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">TailwindCSS</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Vite</div>
              <div class="border-2 border-[#131313]/5 rounded-md px-1 py-0.5">Netlify</div>
            </div>
          </div>
        </div>
        <div class="absolute h-6 z-10 text-xl -left-4 opacity-0 -rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-left-12 pointer-events-none">🟄</div>
        <div class="absolute h-6 z-10 text-xl -right-4 opacity-0 rotate-90 blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:blur-none group-hover:-right-12 pointer-events-none">🟄</div>
      </div>
    </div> -->
  </div>

  <div class="py-24 "></div>
  <!-- <div class="py-24 text-center">🟆 🟅 🟄 🞟 🞄 🞟 🟄 🟅 🟆</div> -->
  <!-- <div class="py-24 text-center">🞄&emsp;🞟&emsp;🟄&emsp;🟅&emsp;🟆&emsp;🟅&emsp;🟄&emsp;🞟&emsp;🞄</div> -->

  <div class="grid lg:grid-cols-[0_1fr]">
    <div class="text-heading pb-16 relative">
      <div class="absolute lg:right-44 xl:right-64 w-full">Skills</div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>🟄 React</div>
      <div>🟄 TailwindCSS</div>
      <div>🟄 Vue</div>
      <div>🟄 Angular</div>
      <div>🟄 Typescript</div>
      <div>🟄 RESTful API</div>
      <div>🟄 Git/Github</div>
      <div>🟄 SQL</div>
      <div>🟄 HTML/CSS</div>
    </div>
  </div>
  
  <div class="py-24 "></div>
  <!-- <div class="py-24 text-center">🟆 🟅 🟄 🞟 🞄 🞟 🟄 🟅 🟆</div> -->
  <!-- <div class="py-24 text-center">🞄&emsp;🞟&emsp;🟄&emsp;🟅&emsp;🟆&emsp;🟅&emsp;🟄&emsp;🞟&emsp;🞄</div> -->

  <div class="grid lg:grid-cols-[0_1fr]">
    <div class="text-heading pb-16 relative">
      <div class="absolute lg:right-44 xl:right-64 w-full">Education</div>
    </div>
    <div class="">
      <div class="py-2">
        <div class="flex justify-between">
          <div class="">Bina Nusantara University</div>
          <div class="text-end">2025</div>
        </div>
        <div class="italic">Bachelor of Computer Science / 3.87 GPA / 3.5 Years</div>
      </div>
    </div>
  </div>

</template>

<style></style>