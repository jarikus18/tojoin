<template>
  <div class="page">
    <div class="head">
      <SectionTop :title="title" />
    </div>

    <div class="article-wrapper">
      <div class="container article-list">
        <div
          v-for="(article, index) in list"
          :key="article.uid"
          :class="['article-item', (index + 1) % 2 === 0 && 'even']"
        >
          <ArticlePreview :article="article" :vendor="vendor" />
        </div>
      </div>
    </div>
    <div v-if="showPaginnation" class="pagination-wrapper">
      <Pagination
        :getcurrentpage="getCurrentPage"
        :total="pages"
        :page="filter.page"
      />
    </div>
    <div v-if="currentList.length !== total" class="show-more">
      <button @click="getMoreItems">Ещё примеры</button>
    </div>
  </div>
</template>
<script>
import ArticlePreview from '@/components/content/ArticlePreview'
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
    vendor: {
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
      showMore: false,
      currentList: [],
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
      let arr = list.slice(start, end)
      this.total = list.length

      if (this.showMore) {
        arr = [...this.currentList, ...arr]
      }
      this.currentList = arr
      return { list: arr }
    },
    getMoreItems() {
      if (this.total > this.currentList.length) {
        this.showMore = true
        this.filter.page += 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 250px;
  position: relative;
  &::before {
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
  @media (max-width: 767px) {
    margin-bottom: 150px;
    background: linear-gradient(
      179.99deg,
      #e5efff 9.73%,
      #fafbfe 64.86%,
      #fafbfe 111.01%
    );
  }
}
.article {
  &-wrapper {
    margin: 0 auto 30px;
    padding: 0 8%;
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
  &-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1580px;
  }
  &-item {
    flex: 0 50%;
    margin-bottom: 5%;
  }

  @media (max-width: 767px) {
    &-wrapper {
      padding: 0 15px;
    }
    &-list {
      flex-direction: column;
      &::before {
        content: none;
      }
    }
    &-item {
      flex: 1;
      margin-bottom: 50px;
    }
  }
}
.pagination-wrapper {
  margin: auto;
  text-align: center;
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }
}
.show-more {
  text-align: center;
  display: none;
  position: relative;
  & button {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #6a6a6a;
    border: none;
    background: none;
    text-decoration: underline;
  }
  @media (max-width: 767px) {
    display: block;
  }
}
</style>
