<script setup lang="ts">
import { ref, computed } from 'vue'
import router from '@/router'

import AccountIconVue from './AccountIcon.vue'
import { readExpiry } from '@/helpers/localstorage-helper'
import { logout } from '@/services/authApi'

const isLoading = ref(false)

const isUserLoggedIn = computed(() => {
  if (router.currentRoute.value.fullPath !== '/') {
    return true
  }
  return false
})

const getUserInfo = () => {
  if (isUserLoggedIn.value) return readExpiry('user_info').response
}

const handleLogout = async () => await logout(isLoading)
</script>

<template>
  <div v-if="isUserLoggedIn" class="user-info">
    <div class="user-name">
      <span>{{ getUserInfo().name }}</span>
    </div>
    <div>
      <AccountIconVue v-if="!getUserInfo().picture" class="default-icon" />
      <AccountIconVue v-else :src="getUserInfo().picture" />
    </div>
    <button class="logout" @click="handleLogout" :disabled="isLoading">Sair</button>
  </div>
</template>

<style>
.user-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.user-name {
  max-width: 100px;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.default-icon {
  padding: 3px;
  background: var(--vt-c-white);
}

.logout {
  background-color: transparent;
  color: var(--color-text);
  font-weight: 600;
  border: none;
  display: flex;
  padding: 0;
  margin-top: 2px;
}

.logout:hover {
  color: var(--vt-c-white);
}
</style>
