<script setup lang="ts">
import CardItem from './CardItem.vue'

defineProps<{
  item: any
}>()
</script>

<template>
  <CardItem>
    <template #title>{{ item.title }}</template>
    <template #content>
      <span>Produtor</span>: {{ item.producer }}<br />
      <span>Diretor</span>: {{ item.director }}<br />
      <span>Data de lançamento</span>: {{ item.release_date }}<br />
      <span>Texto de abertura</span>: {{ item.opening_crawl }}<br />
    </template>
  </CardItem>
</template>
