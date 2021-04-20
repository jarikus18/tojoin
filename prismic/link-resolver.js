/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

// Link Resolver
function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'page') {
    return '/page/' + doc.uid
  } else if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid
  }
  // Default to homepage
  return '/'
}

export default linkResolver
