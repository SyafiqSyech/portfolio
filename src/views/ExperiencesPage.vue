<template>
  <div class="flex flex-col gap-8">
    
    <Breadcrumb 
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Experiences' }
      ]"
    />

    <div class="flex flex-col gap-4 justify-center">
  
      <ExperienceCard
        v-for="(exp) in experiences"
        :key="exp.id"
        :id="exp.id"
        :company="exp.company"
        :role="exp.role"
        :date="exp.date"
      />

      <div class="flex justify-center">
        <RouterLink to="/">
          <ButtonUI label="Go Back Home" />
        </RouterLink>
      </div>
  
    </div>
  </div>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Breadcrumb from '../components/ui/Breadcrumb.vue';
import ExperienceCard from '../sections/experiences/ExperienceCard.vue';
import ButtonUI from '../components/ui/ButtonUI.vue';
import { experiences } from '../data/experiences';
</script>