/* eslint-disable camelcase */
const fs = require('fs')
const path = require('path')
const https = require('https')
const BASE_URL =
  'https://teeple.cdn.prismic.io/api/v2/documents/search?page=1&pageSize=1&ref=%7B%22_tracker%22%3A%22WeRgBqWC%22%7D&q=%5B%5Bat(document.type%2C%20%22menu%22)%5D%5D'

const LOCALES_PATH = path.resolve('../locales')

const get = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url)
      .on('response', (response) => {
        response.setEncoding('utf8')
        let data = ''
        response.on('data', (chunk) => {
          data += chunk
        })
        response.on('end', () => {
          resolve(data)
        })
      })
      .on('error', (error) => {
        reject(error)
      })
  })
}

const getLanguages = async () => {
  const { data = [] } = await get(`${BASE_URL}/items/languages`)
    .then((res) => JSON.parse(res))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
  return data.map(({ code, name, popular, ex_image, image }) => ({
    code: code.substring(0, 2),
    iso: code,
    name,
  }))
}

getLanguages().then((res) => {
  fs.writeFileSync(`${LOCALES_PATH}.json`, JSON.stringify(res))
})
