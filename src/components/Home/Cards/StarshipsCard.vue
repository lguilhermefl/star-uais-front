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
      <span>Velocidade máxima</span>: {{ item.MGLT }}/h<br />
      <span>Carga máxima</span>: {{ item.cargo_capacity }} kg<br />
      <span>Tempo de suprimento para tripulação</span>: {{ item.consumables }}<br />
      <span>Preço</span>: {{ item.cost_in_credits }} créditos<br />
      <span>Pessoal necessário p/ pilotar</span>: {{ item.crew }}<br />
      <span>Passageiros</span>: {{ item.passengers }}<br />
      <span>Classe hyperdrive</span>: {{ item.hyperdrive_rating }}<br />
      <span>Comprimento</span>: {{ item.length }} m<br />
      <span>Fabricante</span>: {{ item.manufacturer }}<br />
      <span>Velocidade máxima na atmosfera</span>: {{ item.max_atmosphering_speed }}<br />
      <span>Modelo</span>: {{ item.model }}<br />
      <span>Classe</span>: {{ item.starship_class }}<br />
    </template>
  </CardItem>
</template>

<style scoped>
.opening {
  text-align: center;
}
</style>
