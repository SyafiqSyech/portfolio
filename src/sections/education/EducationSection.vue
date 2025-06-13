<template>
  <Section title="Education">
    <EducationCard
      :institution="education.institution"
      :degree="education.degree"
      :date="education.date"
    />
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import EducationCard from './EducationCard.vue';
import { education } from '../../data/data';
</script>