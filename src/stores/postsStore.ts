import { defineStore } from 'pinia'
import type { Filter } from '@/constants'
import type { Post } from '@/feed'
import { feedPosts } from '@/feed'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrAfter)

interface State {
    selectedFilter: Filter,
    posts: Post[]
}

export const usePostsStore = defineStore('post', {
    state: (): State => ({
        selectedFilter: 'All',
        posts: feedPosts
    }),

    actions: {
        setSelectedFilter (filter: Filter) {
            this.selectedFilter = filter
          }
    },

    getters: {
        filteredPosts: (state): Post[] => {
            return feedPosts.filter((post: Post) => {
              if (state.selectedFilter === 'Last week') {
                return post.date.isSameOrAfter(dayjs().subtract(1, 'week'))
              }
          
              if (state.selectedFilter === 'Last month') {
                return post.date.isSameOrAfter(dayjs().subtract(1, 'month'))
              }
          
              return true
            })
          }
    }
})