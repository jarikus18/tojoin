export const state = () => ({
  locale: {},
  common: {},
  openMenu: false,
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
  SET_MENU_STATE(state, payload) {
    state.openMenu = payload === 'close' ? false : !state.openMenu
  },
  SET_ARTICLES(state, data) {
    state.articles = data
  },
}

export const actions = {
  changeLanguage({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
  },
  nuxtServerInit({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
  },
  toggleMenu({ commit, state }, params) {
    commit('SET_MENU_STATE', params)
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

// function localSearch(item, search) {
//   return (
//     item.title.toLowerCase().includes(search) ||
//     item.short_description.toLowerCase().includes(search) ||
//     item.content.toLowerCase().includes(search)
//   )
// }
