<template>
  <div class="page">
    <div class="head">
      <SectionTop :title="title" />
    </div>

    <ul class="article-list">
      <li v-for="article in list" :key="article.uid" class="article-item">
        <ArticlePreview :article="article" />
      </li>
    </ul>
    <div v-if="showPaginnation" class="pagination-wrapper">
      <Pagination
        :getcurrentpage="getCurrentPage"
        :total="pages"
        :page="filter.page"
      />
    </div>
  </div>
</template>
<script>
import ArticlePreview from '@/components/ArticlePreview'
import SectionTop from '@/components/sections/SectionTop'
import Pagination from '@/components/Pagination.vue'
import config from '@/config'

export default {
  components: { ArticlePreview, SectionTop, Pagination },
  props: {
    posts: {
      type: Object,
      default() {
        return {}
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      total: this.posts.results.length,
      filter: {
        page: 1,
      },
    }
  },
  computed: {
    showPaginnation() {
      return this.total > config.offset
    },
    pages() {
      return Math.ceil(this.total / config.offset)
    },
    list() {
      const { list } = this.paginatedData({
        list: this.posts.results,
        page: this.filter.page,
      })
      return list
    },
  },
  methods: {
    getCurrentPage(page) {
      this.filter.page = page
    },
    paginatedData({ list, page, size = config.offset }) {
      const start = (page - 1) * size
      const end = start + size
      const arr = list.slice(start, end)
      this.total = list.length
      return { list: arr }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 250px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 0;
    width: 100%;
    height: 50vh;
    background: linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 5.87%,
      rgba(236, 240, 253, 0.53) 30.49%,
      #ecf0fd 49.01%,
      rgba(236, 240, 253, 0.43) 85.25%,
      rgba(236, 240, 253, 0) 100%
    );
  }
}
.article {
  &-list {
    margin: 0 auto 30px;
    padding: 0 5%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 10%;
      left: 0;
      width: 100%;
      height: 90%;
      background: linear-gradient(
        180deg,
        rgba(236, 240, 253, 0) 0%,
        rgba(236, 240, 253, 0.53) 14.32%,
        #ecf0fd 45.83%,
        rgba(236, 240, 253, 0.43) 84.33%,
        rgba(236, 240, 253, 0) 100%
      );
    }
  }
  &-item {
    flex: 0 50%;
    margin-bottom: 8%;
  }
}
.pagination-wrapper {
  margin: auto;
  text-align: center;
}
</style>
