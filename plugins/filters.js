import Vue from 'vue'

Vue.filter('dataFromTimestamp', (val, locale) =>
  new Date(val).toLocaleDateString(locale)
)

Vue.filter('getImageOrientation', (dimensions) => {
  if (!dimensions) return
  const { width, height } = dimensions
  if (!width || !height) return
  return width >= height ? 'horizontal' : 'vertical'
})

Vue.filter('encode', (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
})
