<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
import TheFeed from '@/components/TheFeed.vue'
</script>

<template>
  <div class="columns m-auto">
    <div class="column is-narrow sidebar pl-0">
      <TheSidebar />
    </div>

    <div class="column">
      <div class="is-flex is-align-items-center is-flex-direction-column">
        <TheFeed />
      </div>
    </div>
  </div>
</template>

<style>

.sidebar {
  border-right: 1px solid #cacaca;
    position: fixed;
    height: 100vh;
    top: 0;
    min-width: 200px;
}

@media screen and (min-width: 1366px) {
  .sidebar {
    min-width: 300px;
  }
}

@media screen and (max-width: 963px) {
  .sidebar {
    display: none;
  }
}
</style>
