<template>
  <Section title="Education">
    <EducationCard
      :institution="educations.institution"
      :degree="educations.degree"
      :date="educations.date"
    />
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import EducationCard from './EducationCard.vue';
import { educations } from '../../data/educations';
</script>