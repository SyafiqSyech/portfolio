<template>
  <Section title="Skills">
    <div class="flex flex-wrap gap-3">
      <div
        v-for="(skill, idx) in skills"
        :key="idx"
        class="bg-clip-padding border-2 border-primary-light bg-background rounded-md px-3 py-1"
      >
        {{ skill }}
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import { skills } from '../../data/data';
</script>