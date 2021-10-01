/**
 * This file queries for content and generates pages. For each generated page,
 * an Open Graph image is also generated using `gatsby-plugin-open-graph-images`.
 */

const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	// Query for data from GitHub and our local Markdown files.
	const { data } = await graphql(`
		query {
			allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
				nodes {
					name
					childMarkdownRemark {
						id
						frontmatter {
							title
							author
						}
					}
				}
			}
		}
	`);

	// Create pages for each blog post along with its Open Graph image.
	// These Open Graph images will appear like DEV Community's images.
	for (const blogFile of data.allFile.nodes) {
		createPage({
			path: `/blog/${blogFile.name}/`,
			component: path.resolve("./src/templates/blogPost.tsx"),
			context: {
				id: blogFile.childMarkdownRemark.id,
			},
		});
	}
};
