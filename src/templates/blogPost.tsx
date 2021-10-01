/**
 * This template is used for blog posts. The page's `data` prop is typed using
 * GraphQL Code Generator.
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, PageProps } from "gatsby";

import { BlogPostTemplateQuery } from "../types.generated";

type BlogPostTemplate = PageProps<BlogPostTemplateQuery>;

export default function BlogPostTemplate({
	data,
}: BlogPostTemplate): JSX.Element {
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
	query BlogPostTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`;
