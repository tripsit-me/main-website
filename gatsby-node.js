'use strict';

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter, }) => {
	const { createPage } = actions
	const factsheetTemplate = path.resolve('./src/templates/factsheet.tsx')
	const result = await graphql(`
		{
			allMarkdownRemark(sort: {order: DESC, fields: frontmatter___title}, filter: {frontmatter: {slug: {regex: "/factsheet\\\\/.*/"}}}) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
  `)
	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: factsheetTemplate,
			context: {},
		})
	})
}
