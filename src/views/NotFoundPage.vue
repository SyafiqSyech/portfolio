<template>
  <div>

    <Breadcrumb :items="[
      { label: 'Home', to: '/' },
      { label: '404 Not Found' }
    ]" />
    
    <div class="flex flex-col items-center gap-8 mt-16">
      <h1 class="text-4xl font-title">404</h1>
      
      <p class="text-secondary text-center">
        Welp, it seems like the page doesn't exist.
      </p>

      <RouterLink to="/">
        <ButtonUI label="Go Back Home" />
      </RouterLink>

    </div>

  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
</script>