<template>
  <Paginate
    v-model="currentPage"
    :page-count="totalPageCount"
    :classes="bootstrapPaginationClasses"
    :labels="customLabels"
  >
  </Paginate>
</template>

<script>
import Paginate from 'vue-plain-pagination'

export default {
  components: { Paginate },
  props: {
    getcurrentpage: {
      type: Function,
      default: () => {},
    },
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentPage: 1,
      totalPageCount: this.total,
      bootstrapPaginationClasses: {
        ul: 'module__pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page',
      },
      customLabels: {
        first: false,
        last: false,
        prev: `<img src="${require('assets/icons/pagination_prev.svg')}" alt="prev" />`,
        next: `<img src="${require('~/assets/icons/pagination_next.svg')}" alt="next" />`,
      },
    }
  },
  watch: {
    currentPage() {
      this.getcurrentpage(this.currentPage)
      return this.currentPage
    },
    page() {
      this.currentPage = this.page
    },
    total() {
      this.totalPageCount = this.total
    },
  },
}
</script>

<style lang="scss">
.module__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  & .page-item {
    & .disabled {
      pointer-events: none;
    }
    & .page {
      border: 0;
      font-weight: 600;
      font-size: 26px;
      line-height: 122%;
      color: #1b1732;
      background: #f2f2f2;
      border-radius: 16px;
      cursor: pointer;
      padding: 18px 24px;
      margin: 0 4.5px;
      transition: all 0.3s linear;
      &:hover {
        box-shadow: 2px 10px 25px -4px rgba(84, 48, 209, 0.3);
      }
      &.pagination-link--active {
        background: #a48aff;
        box-shadow: 2px 10px 25px -4px rgba(84, 48, 209, 0.3);
        color: #fff;
      }
      &.pagination-link--disable {
        box-shadow: none;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
}
</style>
