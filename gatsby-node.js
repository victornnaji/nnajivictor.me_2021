const path = require('path');

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
