<script setup lang="ts">
import type { Collection } from './types'

defineProps<{
  name: Collection
}>()

const emit = defineEmits(['getCollectionInfo'])
const onGetCollectionInfo = (e: Event) => {
  emit('getCollectionInfo', (e.target as HTMLButtonElement).name)
}
</script>

<template>
  <button :name="name" class="btn" @click="onGetCollectionInfo">
    <slot></slot>
  </button>
</template>

<style scoped>
* {
  --var-bs-border-color: #366b75;
  --var-bs-border-color-hover-focus: var(--vt-c-white);

  --var-btns-text-color: var(--vt-c-white);
  --var-btns-bg-color: transparent;
  --var-btns-bg-color-hover-focus: #366b75;
}

.btn:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.btn:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.btn {
  display: flex;
  place-items: center;
  color: var(--var-btns-text-color);
  background-color: var(--var-btns-bg-color);
  border: var(--var-bs-border-color) var(--var-bs-border-width) solid;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  box-sizing: border-box;
  padding: 15px 20px;
  text-transform: uppercase;
}
.btn:hover {
  filter: none;
}

.btn:hover,
.active {
  background-color: var(--var-btns-bg-color-hover-focus);
  border-color: var(--var-bs-border-color-hover-focus);
  z-index: 1;
}
</style>
