const indexName = `Posts`
const playgroundIndexName = `Playground`

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
}`;

const playgroundQuery = `{
    playground: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
          }
          id
        }
      }
    }
  }
`;

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

interface PlaygroundProps {
    node: {
        frontmatter: {
            slug: string,
            title: string,
            excerpt: string,
        }, 
        id: string
    }
}

function playgroundToAlgoliaRecord({node: {frontmatter: {slug, title, excerpt}, id}}: PlaygroundProps){
    return {
        objectID: id,
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
    {
      query: playgroundQuery,
      transformer: ({ data } : any) => data.playground.edges.map(playgroundToAlgoliaRecord),
      playgroundIndexName,
      settings: { attributesToSnippet: [`excerpt:20`] },
    },
]

  module.exports = queries