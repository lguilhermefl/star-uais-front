<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  placeholder?: string
  type?: string
  modelValue: string | null
  regex: RegExp
  errorMessage: string
  isLoading: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isValid = computed(() => {
  if (props.modelValue) {
    return props.regex.test(props.modelValue)
  }

  return false
})
</script>

<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    :class="{ invalid: !isValid && modelValue !== null }"
    :disabled="isLoading"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
  <p v-if="!isValid && modelValue !== null" class="error">{{ errorMessage }}</p>
</template>

<style scoped>
input {
  width: 100%;
  max-width: 220px;
  background: var(--vt-c-white);
  border-radius: 8px;
  height: 40px;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0 15px;
  color: var(--color-text-soft);
}

input:focus {
  box-shadow: var(--color-border-hover) 0px 0px 0px 1px;
  border-color: var(--vt-c-white);
  outline: none;
}
.error {
  color: var(--color-error);
  text-align: center;
  line-height: 1.2;
}
.invalid {
  border-color: var(--color-error);
}
</style>
