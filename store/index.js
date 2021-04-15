export const state = () => ({
  locale: {},
  common: {},
  menu: {},
  articles: {
    list: [],
    total: 0,
  },
})

export const mutations = {
  SET_LOCALE(state, locale) {
    state.locale = locale
  },
  SET_COMMON_DATA(state, obj) {
    state.common = obj
  },
  SET_ARTICLES(state, data) {
    state.articles = data
  },
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_ERROR(state, error) {
    state.menu = error
  },
}

export const actions = {
  changeLanguage({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
  },
  nuxtServerInit({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
  },
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (
        await $prismic.api.getSingle('menu', {
          lang: this.$i18n.localeProperties.iso,
        })
      ).data

      commit('SET_MENU', menu)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error)
    }
  },
}

export const getters = {
  getArticles(state) {
    return state.articles.list
  },

  getSingleArticle(state) {
    return (slug) => state.articles.list.find((p) => p.slug === slug)
  },

  getFeaturedArticle(state) {
    return state.articles.list.find((p) => p.featured)
  },
}
