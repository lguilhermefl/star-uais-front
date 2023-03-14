<template>
  <div class="btn-group">
    <slot></slot>
  </div>
</template>

<style>
* {
  --var-bs-border-width: 1px;
}

.btn-group {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-bottom: 2rem;
}

.btn-group > :not(.btn:first-child) {
  margin-left: calc(var(--var-bs-border-width) * -1);
}
</style>
