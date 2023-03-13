<script setup lang="ts">
import CardItem from './CardItem.vue'

defineProps<{
  item: any
}>()
</script>

<template>
  <CardItem>
    <template #title>{{ item.name }}</template>
    <template #content>
      <span>Altura média</span>: {{ item.average_height }} cm<br />
      <span>Expectativa de vida média</span>: {{ item.average_lifespan }}<br />
      <span>Classificação</span>: {{ item.classification }}<br />
      <span>Designação</span>: {{ item.designation }}<br />
      <span>Idioma</span>: {{ item.language }}<br />
      <span>Cores dos olhos</span>: {{ item.eye_colors }}<br />
      <span>Cores dos cabelos</span>: {{ item.hair_colors }}<br />
      <span>Cores de pele</span>: {{ item.skin_colors }}<br />
    </template>
  </CardItem>
</template>

<style scoped>
.opening {
  text-align: center;
}
</style>
