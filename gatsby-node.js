const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/post.tsx")
  const caseStudyTemplate = path.resolve("src/templates/case-study.tsx")

  const result = await graphql(`
    query getAllQueries {
      caseStudies: allWpCaseStudy(sort: { order: DESC, fields: date }) {
        edges {
          node {
            slug
            excerpt
            title
            CaseStudiesGraphql {
              featuredImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: TRACED_SVG
                      layout: CONSTRAINED
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }
        }
      }

      posts: allWpPost(sort: { order: DESC, fields: date }) {
        edges {
          node {
            databaseId
            slug
            title
            excerpt
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const case_studies = result.data.caseStudies.edges
  case_studies.forEach(({ node }, index) => {
    const next = case_studies[index === case_studies.length - 1 ? 0 : index + 1]
    const prev = case_studies[index === 0 ? case_studies.length - 1 : index - 1]
    createPage({
      path: `case-study/${node.slug}`,
      component: caseStudyTemplate,
      context: {
        node,
        next,
        prev,
        slug: node.slug,
      },
    })
  })

  const posts = result.data.posts.edges
  posts.forEach(({ node }, index) => {
    const next = posts[index === posts.length - 1 ? 0 : index + 1]
    const prev = posts[index === 0 ? posts.length - 1 : index - 1]
    createPage({
      path: `blog/${node.slug}`,
      component: postTemplate,
      context: {
        node,
        next,
        prev,
        slug: node.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `
  createTypes(typeDefs)
}
