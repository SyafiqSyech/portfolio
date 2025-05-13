<template>
  <Section title="Experience">
    <div class="flex flex-col gap-8">
      <ExperienceCard
        v-for="(exp, idx) in experiences"
        :key="idx"
        :company="exp.company"
        :role="exp.role"
        :date="exp.date"
        :location="exp.location"
        :color="exp.color"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import ExperienceCard from './ExperienceCard.vue';
import { experiences } from '../../data/data';
</script>