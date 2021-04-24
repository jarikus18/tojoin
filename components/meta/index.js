export default (data = {}) => ({
  title: data.meta_title || null,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: data.meta_description || null,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: data.meta_keywords || null,
    },
    {
      property: 'og:title',
      content: data.meta_title || null,
      vmid: 'og:title',
    },
    {
      property: 'og:description',
      content: data.meta_description || null,
      vmid: 'og:description',
    },
    {
      property: 'og:image',
      content: data.meta_image?.url || null,
      vmid: 'og:image',
    },
  ],
})
