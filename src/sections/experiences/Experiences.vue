<template>
  <Section title="Experiences">
    <div class="flex flex-col gap-4">
      <ExperienceCard
        v-for="(exp) in experiences"
        :key="exp.id"
        :id="exp.id"
        :company="exp.company"
        :role="exp.role"
        :date="exp.date"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import ExperienceCard from './ExperienceCard.vue';
import { experiences } from '../../data/data';
</script>