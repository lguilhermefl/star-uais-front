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
      <span>População</span>: {{ item.population }}<br />
      <span>Clima</span>: {{ item.climate }}<br />
      <span>Diâmetro</span>: {{ item.diameter }} km<br />
      <span>Gravidade</span>: {{ item.gravity }}<br />
      <span>Terreno</span>: {{ item.terrain }}<br />
      <span>Período de rotação</span>: {{ item.rotation_period }} horas<br />
      <span>Período de órbita</span>: {{ item.orbital_period }} dias<br />
      <span>Superfícia de água</span>: {{ item.surface_water }}%<br />
    </template>
  </CardItem>
</template>

<style scoped>
.opening {
  text-align: center;
}
</style>
