const path = require('path');

exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;
    const caseStudiesTemplate = path.resolve('src/templates/case-studies.tsx');
    const caseStudyTemplate = path.resolve('src/templates/case-study.tsx');

    const result = await graphql(`
      {
        caseStudies: allWpCaseStudy(sort: {order: DESC, fields: date}) {
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
                      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED, formats: [AUTO,WEBP])
                    }
                  }
                }
              }
            }
          }
        }


      }
    `)

    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }


    const case_studies = result.data.caseStudies.edges;
    case_studies.forEach(({node}, index) => {
      const next = case_studies[index === case_studies.length - 1 ? 0 : index + 1];
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
    
}

exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
            }
        }
    })
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type WpBlockAttributesObject {
        foobar: String
      }
    `;
    createTypes(typeDefs);
  };
