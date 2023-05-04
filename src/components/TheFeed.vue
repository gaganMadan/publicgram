<script setup lang="ts">
import { ref } from 'vue'
import { feedPosts } from '../feed'
import { useCounterStore } from '@/stores/counter'

type filterType = 'All' | 'Last week' | 'Last month'
const filters: filterType[] = ['All', 'Last week', 'Last month']

const selectedFilter = ref<string>('All')

const setSelectedFilter = (filter: filterType) => {
  selectedFilter.value = filter
}
</script>

<template>
  {{ selectedFilter }}
  <div class="panel">
    <p class="panel-tabs">
      <a
        v-for="filter in filters"
        :key="filter"
        :class="{ 'is-active': filter === selectedFilter }"
        @click="setSelectedFilter(filter)"
        >{{ filter }}</a
      >
    </p>
  </div>

  <div v-for="post of feedPosts" class="card mb-3 is-shadowless" :key="post.id">
    <div class="card-content px-0">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.profileImageURL" alt="Placeholder image" class="is-rounded" />
          </figure>
        </div>
        <div
          class="media-content is-align-self-stretch is-flex is-flex-direction-column is-justify-content-space-evenly"
        >
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
  width: min(100vw, 400px);
  border-bottom: 1px solid #cacaca;
}
</style>
