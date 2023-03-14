<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <RouterLink to="/home">
      <img alt="Star Uais logo" class="logo" src="@/assets/logo.svg" />
    </RouterLink>
    <div>
      <h1 class="heading">Pensa num trem bão cheio de informações para os fãs de Star Wars!</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 2rem;
}

.logo {
  max-height: 70px;
}

.heading {
  color: var(--vt-c-white);
  font-size: 1.5rem;
}
</style>
