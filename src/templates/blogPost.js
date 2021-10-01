/**
 * NOTE: This template is not used in this project, but it demonstrates how to
 * use generated TypeScript types within a JavaScript file.
 *
 * This is a .js version of blogPost.tsx.
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

/**
 * @typedef {import("../types.generated").BlogPostTemplateJsQuery} Data
 * @param props {import("gatsby").PageProps<Data>}
 */
export default function BlogPostTemplate({ data }) {
	const blogPost = data.markdownRemark;
	if (!blogPost) {
		throw new Error("Blog post not found");
	}

	return (
		<main>
			<Helmet>
				<title>{blogPost.frontmatter?.title}</title>
			</Helmet>
			<p>
				This is a page for a mock blog post named{" "}
				<strong>{blogPost.frontmatter?.title}</strong>. If you open the
				template's source code at <code>src/templates/blogPost.tsx</code>, you
				will see the <code>data</code> prop is typed using TypeScript with
				GraphQL Code Generator!
			</p>
			<hr />
			{blogPost?.html && (
				<article dangerouslySetInnerHTML={{ __html: blogPost.html }} />
			)}
		</main>
	);
}

export const query = graphql`
	query BlogPostTemplateJS($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`;
