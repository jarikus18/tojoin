/* eslint-disable camelcase */
const fs = require('fs')
const path = require('path')
const prismic = require('@prismicio/client')
const BASE_URL = 'https://teeple.cdn.prismic.io/api/v2'

const LOCALES_PATH = path.resolve('./locales/')

const getLanguages = async () => {
  const api = await prismic.getApi(BASE_URL)

  const { languages } = api
  await Promise.all(
    languages.map(async (item) => {
      const menu = await api.getSingle('menu', { lang: item.id })
      const settings = await api.getSingle('general_settings', {
        lang: item.id,
      })
      const sortLangName = item.id.slice(0, 2)
      fs.writeFileSync(
        `${LOCALES_PATH}/${sortLangName}.json`,
        JSON.stringify({ menu: menu.data, settings: settings.data })
      )
    })
  )
}

getLanguages()
