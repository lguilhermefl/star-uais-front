<template>
  <div class="card">
    <h3 class="card-title">
      <slot name="title"></slot>
    </h3>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style>
.card {
  background-color: white;
  height: auto;
  box-sizing: border-box;
  padding: 20px 15px 20px 15px;
  width: calc(92.5% / 5);
  margin-bottom: 1.5%;
  color: black;
}

.card-title {
  text-align: center;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.2;
}

.card-content {
  width: 100%;
}

.card-content > span {
  text-decoration: underline;
}
</style>
