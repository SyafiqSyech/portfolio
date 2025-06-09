<template>
  <Section title="Skills">
    <div class="grid grid-cols-[8rem_auto] gap-4">
      <div class="font-medium">
        Frontend
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(skill, idx) in skills.frontend"
          :key="idx"
          class="text-secondary font-medium border-[.1rem] border-border bg-background-secondary group hover:bg-background hover:text-primary transition-all rounded-lg p-2 text-sm sm:p-4 sm:text-base hover:scale-105"
        >
          <p class="group-hover:scale-95 transition-all">
            {{ skill[0] }} <span class="font-normal text-sm">{{ skill[1] ? `(${skill[1]})` : '' }}</span>
          </p>
        </div>
      </div>
      <div class="font-medium">
        Tools
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(skill, idx) in skills.tools"
          :key="idx"
          class="text-secondary font-medium border-[.1rem] border-border bg-background-secondary group hover:bg-background hover:text-primary transition-all rounded-lg p-2 text-sm sm:p-4 sm:text-base hover:scale-105"
        >
          <p class="group-hover:scale-95 transition-all">
            {{ skill[0] }} <span class="font-normal text-sm">{{ skill[1] ? `(${skill[1]})` : '' }}</span>
          </p>
        </div>
      </div>
      <div class="font-medium">
        Others
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(skill, idx) in skills.others"
          :key="idx"
          class="text-secondary font-medium border-[.1rem] border-border bg-background-secondary group hover:bg-background hover:text-primary transition-all rounded-lg p-2 text-sm sm:p-4 sm:text-base hover:scale-105"
        >
          <p class="group-hover:scale-95 transition-all">
            {{ skill[0] }} <span class="font-normal text-sm">{{ skill[1] ? `(${skill[1]})` : '' }}</span>
          </p>
        </div>
      </div>
      <div class="font-medium">
        Languages
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(skill, idx) in skills.languages"
          :key="idx"
          class="text-secondary font-medium border-[.1rem] border-border bg-background-secondary group hover:bg-background hover:text-primary transition-all rounded-lg p-2 text-sm sm:p-4 sm:text-base hover:scale-105"
        >
          <p class="group-hover:scale-95 transition-all">
            {{ skill[0] }} <span class="font-normal text-sm">{{ skill[1] ? `(${skill[1]})` : '' }}</span>
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/layout/Section.vue';
import HoverLabel from '../../components/ui/HoverLabel.vue';
import { skills } from '../../data/data';
</script>