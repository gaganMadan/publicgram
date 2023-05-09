<script setup lang="ts">
import { usePostsStore } from '../stores/postsStore'
import { filters } from '../constants'

const postsStore = usePostsStore()

</script>

<template>
  <div class="panel responsive-feed-width">
    <p class="panel-tabs">
      <a v-for="filter in filters" :key="filter" :class="{ 'is-active': filter === postsStore.selectedFilter }"
        @click="postsStore.setSelectedFilter(filter)">{{ filter }}</a>
    </p>
  </div>

  <div v-for="post of postsStore.filteredPosts" class="card mb-3 is-shadowless responsive-feed-width" :key="post.id">
    <div class="card-content px-0">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.profileImageURL" alt="Placeholder image" class="is-rounded" />
          </figure>
        </div>
        <div class="media-content is-align-self-stretch is-flex is-flex-direction-column is-justify-content-space-evenly">
          <p class="title is-6 m-0">{{ post.fullName }}</p>
          <p class="subtitle is-7 m-0">{{ post.username }}</p>
        </div>
      </div>
    </div>

    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="post.imageURL" alt="Placeholder image" />
      </figure>
    </div>

    <div class="card-content p-0 pb-4">
      <div class="content">
        <div class="">
          <div class="mb-1 is-size-3">🖤 💭 ✈️</div>
          <div class="mb-1 is-size-6">{{ post.likesCount }} Likes</div>
          <div class="mb-1 is-size-6" style="cursor: pointer">View all comments</div>
          <!-- convert this to input field -->
          <div class="mb-1 is-size-6">Add a comment...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-bottom: 1px solid #cacaca;
}

.responsive-feed-width {
  width: min(100vw, 400px);
}

.panel {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9)
}

.panel-tabs a {
  flex-basis: 100%;
  text-align: center;
}
</style>
