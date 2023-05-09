<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="modal" style="display: block;">
    <div class="modal-background"></div>
    <div class="modal-content" style="height: 100%;">
      <div id="modal" 
        class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        style="min-height: 100%">
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>

  <header>
    <div class="wrapper">
      <div class="container is-fluid" style="min-height: 100vh">
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
