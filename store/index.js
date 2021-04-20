import ru from '../locales/ru.json'
import en from '../locales/en.json'
import uk from '../locales/uk.json'

export const dictionary = { ru, en, uk }

export const state = () => ({
  locale: {},
  common: {},
  menu: {},
  settings: {},
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
  SET_MENU_ERROR(state, error) {
    state.menu = error
  },
  SET_GENERAL_SETTINGS(state, settings) {
    state.settings = settings
  },
  SET_GENERAL_SETTINGS_ERROR(state, error) {
    state.settings = error
  },
}

export const actions = {
  changeLanguage({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
    commit('SET_MENU', dictionary[this.$i18n.localeProperties.code].menu)
    commit(
      'SET_GENERAL_SETTINGS',
      dictionary[this.$i18n.localeProperties.code].settings
    )
  },
  nuxtServerInit({ commit }) {
    commit('SET_LOCALE', this.$i18n.localeProperties)
    commit('SET_MENU', dictionary[this.$i18n.localeProperties.code].menu)
    commit(
      'SET_GENERAL_SETTINGS',
      dictionary[this.$i18n.localeProperties.code].settings
    )
  },
  // async fetchMenu({ commit }, $prismic) {
  //   try {
  //     const menu = (
  //       await $prismic.api.getSingle('menu', {
  //         lang: this.$i18n.localeProperties.iso,
  //       })
  //     ).data
  //     commit('SET_MENU', menu)
  //   } catch (e) {
  //     const error = 'Please create a menu document'
  //     commit('SET_MENU_ERROR', error)
  //   }
  // },
  async fetchGeneralSettings({ commit }, $prismic) {
    try {
      const settings = (
        await $prismic.api.getSingle('general_settings', {
          lang: this.$i18n.localeProperties.iso,
        })
      ).data

      commit('SET_GENERAL_SETTINGS', settings)
    } catch (e) {
      const error = 'Please create a general settings'

      commit('SET_GENERAL_SETTINGS_ERROR', error)
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
