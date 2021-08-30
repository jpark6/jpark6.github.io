/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

require('ts-node').register()
const { createFilePath } = require('gatsby-source-filesystem')
exports.onCreateNode = ({ node, actions, getNode}) => {
  const { createNodeField } = actions
  // Add slug path to mdx nodes
  if (node.internal.type === "Mdx") {
    // relativePath (relative to the `/content` dir) is used to resolve basePath down below.
    // By convention it also matches collectionName, but could be different.
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: `blog`
    })

    createNodeField({
      node,
      name: `slug`,
      value: `/blog${relativePath}`,
    })
  }
}
exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions
  return graphql(`{
  allMdx(
    sort: {order: ASC, fields: [frontmatter___mainOrder, frontmatter___postOrder, frontmatter___date]}
  ) {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
  }
}`).then((results, errors) => {
    const path = require(`path`)
    if (errors) return Promise.reject(errors)
    results.data.allMdx.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/post-template.tsx`),
        context: {
          slug: node.frontmatter.slug
        }
      })
    })
  })
}
