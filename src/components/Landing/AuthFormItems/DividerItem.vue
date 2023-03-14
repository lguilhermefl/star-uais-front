<template>
  <div>
    <span>ou</span>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0.5rem 0;
}

div::before {
  content: '';
  flex: 0 1 100%;
  margin-right: 10px;
  border-bottom: 1px solid var(--color-divider);
  transform: translateY(-50%);
}

div::after {
  content: '';
  flex: 0 1 100%;
  margin-left: 10px;
  border-bottom: 1px solid var(--color-divider);
  transform: translateY(-50%);
}

span {
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
  text-align: center;
  color: var(--color-divider);
}
</style>
