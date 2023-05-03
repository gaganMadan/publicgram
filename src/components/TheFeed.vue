<script setup lang="ts"></script>

<template>
  <div v-for="i of 5" class="card mb-3 is-shadowless" :key="i">
    <div class="card-content px-0">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="`https://picsum.photos/seed/${i + 200}/128`"
              alt="Placeholder image"
              class="is-rounded"
            />
          </figure>
        </div>
        <div
          class="media-content is-align-self-stretch is-flex is-flex-direction-column is-justify-content-space-evenly"
        >
          <p class="title is-6 m-0">John Smith</p>
          <p class="subtitle is-7 m-0">@johnsmith</p>
        </div>
      </div>
    </div>

    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="`https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`" alt="Placeholder image" />
      </figure>
    </div>

    <div class="card-content p-0 pb-4">
      <div class="content">
        <div class="">
          <div class="mb-1 is-size-3">
            🖤 💭 ✈️
          </div>
          <div class="mb-1 is-size-6">29 Likes</div>
          <div class="mb-1 is-size-6" style="cursor: pointer;">View all comments</div>
          <!-- convert this to input field -->
          <div class="mb-1 is-size-6">Add a comment...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: min(100vw, 400px);
  border-bottom: 1px solid #cacaca;
  
}
</style>
