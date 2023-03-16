<script setup lang="ts">
import AuthForm from './AuthForm.vue'
import ScrollingInfo from './ScrollingInfo.vue'
</script>
<template>
  <section class="info-and-auth">
    <!-- ALL CREDIT FOR THE SCROLLING TEXT GOES TO Craig Buckler 
    http://www.sitepoint.com/css3-starwars-scrolling-text/ -->
    <div class="scrolling-text">
      <ScrollingInfo />
    </div>
    <div class="auth-form">
      <AuthForm />
    </div>
  </section>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Droid+Sans:400,700);
.info-and-auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.scrolling-text {
  width: calc((100% / 3) * 2);
  height: auto;
  min-height: 450px;
  /* font-family: 'Droid Sans', arial, verdana, sans-serif; */
  font-weight: 700;
  color: var(--vt-c-yellow-soft);
  overflow: hidden;
  background-image: url('/src/assets/background.png');
}

.auth-form {
  width: calc((100% / 3));
  height: auto;
  padding: 1.2rem 0;
  background-color: var(--color-background-soft);
  color: var(--vt-c-white);
  display: flex;
  justify-content: center;
}
</style>
