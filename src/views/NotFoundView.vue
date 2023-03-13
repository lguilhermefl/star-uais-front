<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-wrapper">
    <h1 class="title">Página não encontrada!</h1>
    <p>
      Oops! Não foi possível encontrar esta página, volte para a
      <RouterLink to="/">Home</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
}

.title {
  color: var(--vt-c-white);
  font-size: 2rem;
  margin-bottom: 2rem;
}

a {
  color: var(--vt-c-white);
}
</style>
