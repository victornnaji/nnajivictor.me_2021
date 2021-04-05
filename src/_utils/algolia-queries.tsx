const indexName = `Posts`

const pageQuery = `{
    posts: allWpPost(sort: {order: DESC, fields: date}){
        edges{
            node{
                slug
                databaseId
                title
                excerpt
            }
        }
    }
}`

interface Props {
    node: {databaseId: number, slug: string, title: string, excerpt: string}
}
function pageToAlgoliaRecord({node: {databaseId, slug, title, excerpt}}: Props){
    return {
        objectID: databaseId,
        slug,
        title,
        excerpt
    }
}

const queries = [
    {
      query: pageQuery,
      transformer: ({ data } : any) => data.posts.edges.map(pageToAlgoliaRecord),
      indexName,
      settings: { attributesToSnippet: [`excerpt:20`] },
    },
]

  module.exports = queries