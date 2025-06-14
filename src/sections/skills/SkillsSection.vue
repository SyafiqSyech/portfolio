<template>
  <Section title="Skills">
    <div class="grid grid-cols-[8rem_auto] gap-4">
      <div class="font-title transition-colors">
        Frontend
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillCard
          v-for="(skill, idx) in skills.frontend"
          :key="idx"
          :name="skill[0]"
          :note="skill[1]"
        />
      </div>
      <div class="font-title transition-colors">
        Tools
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillCard
          v-for="(skill, idx) in skills.tools"
          :key="idx"
          :name="skill[0]"
          :note="skill[1]"
        />
      </div>
      <div class="font-title transition-colors">
        Others
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillCard
          v-for="(skill, idx) in skills.others"
          :key="idx"
          :name="skill[0]"
          :note="skill[1]"
        />
      </div>
      <div class="font-title transition-colors">
        Languages
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillCard
          v-for="(skill, idx) in skills.languages"
          :key="idx"
          :name="skill[0]"
          :note="skill[1]"
        />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import { skills } from '../../data/data';
import SkillCard from './SkillCard.vue';
</script>