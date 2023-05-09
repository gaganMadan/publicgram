<script setup lang="ts"></script>

<template>
  <p class="brand has-text-weight-bold">Publicgram</p>
  <ul class="menu-list mt-6">
    <li><a>Search</a></li>
    <li><a>Create</a></li>
    <li><a>Message</a></li>
    <li><a>Notification</a></li>
  </ul>

  <Teleport to="#modal">
    <div class="create-post_dialog p-4">
      <h1 class="is-size-4">What's the vibe?</h1>
    </div>
  </Teleport>
</template> 

<style>
.brand {
  font-family: 'Sacramento', cursive;
  font-size: 2rem;
  color: black;
}

.create-post_dialog {
  min-width: 500px;
  min-height: 500px;
  background-color: white;
}
</style>
