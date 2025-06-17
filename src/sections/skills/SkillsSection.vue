<template>
  <Section title="Skills">
    <div class="grid grid-cols-[8rem_auto] gap-4">
      <template
        v-for="(categorySkills, categoryName) in skills"
        :key="categoryName"
      >
        <div class="font-title transition-colors">
          {{ categoryName }}
        </div>
        <div class="flex flex-wrap gap-2">
          <SkillCard
            v-for="(skill, idx) in categorySkills"
            :key="idx"
            :name="skill.name"
            :note="skill.note"
          />
        </div>
      </template>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import { skills } from '../../data/skills';
import SkillCard from './SkillCard.vue';
</script>