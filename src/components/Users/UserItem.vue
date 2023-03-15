<script setup lang="ts">
defineProps<{
  user: {
    email: string
    name: string
  }
}>()
</script>
<template>
  <div class="user-info">
    <span><b class="info">E-mail</b>: {{ user.email }}</span>
    <span><b class="info">Nome</b>: {{ user.name }}</span>
  </div>
</template>

<style scoped>
.user-info {
  background-color: white;
  height: auto;
  padding: 15px 10px 15px 10px;
  width: calc(92.5% / 5);
  margin-bottom: 1.5%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: break-spaces;
  text-align: center;
}

.info {
  text-decoration: underline;
}
</style>
