<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="container is-fluid" style="height: 100vh">
          <div class="columns m-auto" style=" height: 100%;">
            <div class="column is-narrow sidebar pl-0" style="width: 400px;">
              <p class="brand">Publicgram</p>
            </div>
            <div class="column">second column</div>
        </div>
      </div>
 
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

.brand {
  font-family: 'Sacramento', cursive;
  font-size: 3rem;
  color: black;
}

.sidebar {
  border-right: 1px solid #CACACA;
}
</style>
