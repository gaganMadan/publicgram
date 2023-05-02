<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="container is-fluid" style="height: 100vh">
        <RouterView />
      </div>
 
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
</style>
