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
      <span>Altura</span>: {{ item.height }} cm<br />
      <span>Peso</span>: {{ item.mass }} kg<br />
      <span>Cor dos cabelos</span>: {{ item.hair_color }}<br />
      <span>Cor dos olhos</span>: {{ item.eye_color }}<br />
      <span>Ano de nascimento</span>: {{ item.birth_year }}<br />
    </template>
  </CardItem>
</template>

<style scoped>
.opening {
  text-align: center;
}
</style>
