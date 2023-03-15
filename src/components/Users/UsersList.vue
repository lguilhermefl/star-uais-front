<script setup lang="ts">
import { getUsers } from '@/services/usersApi'
import UserItem from './UserItem.vue'
import { ref, onMounted } from 'vue'

const users = ref<
  {
    email: string
    name: string
  }[]
>()

onMounted(async () => {
  users.value = await getUsers()
})
</script>

<template>
  <div class="containar">
    <div class="info">
      <span
        >Gostaria de voltar para os tópicos de Star Wars?
        <RouterLink to="/home" class="btn-home">Clique aqui</RouterLink> e confira todos eles!</span
      >
      <span
        >Abaixo está a lista com as informações de todos os usários cadastrados até o momento na
        aplicação.</span
      >
    </div>
    <div v-if="users" class="users-list">
      <UserItem v-for="user in users" :key="user.email" :user="user" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: center;
  font-size: large;
  color: #b5b5b5;
}

.btn-home {
  color: #44a1b3;
  background-color: transparent;
  border: none;
  font-size: large;
  padding: 0 5px;
  font-family: 'Pathway Gothic One', Ubuntu, sans-serif;
  font-weight: 600;
}
.users-list {
  display: flex;
  gap: 1.5%;
  width: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
</style>
