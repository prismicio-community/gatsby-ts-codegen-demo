/**
 * This page lists all the sample blog posts. The page's `data` prop is typed
 * using GraphQL Code Generator.
 */

import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";

import { IndexPageQuery } from "../types.generated";

type IndexPageProps = PageProps<IndexPageQuery>;

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
	const blogFiles = data.allFile.nodes;

	return (
		<main>
			<h1>Blog posts</h1>
			<ul>
				{blogFiles.map((blogFile) => (
					<li key={blogFile.name}>
						<Link to={`/blog/${blogFile.name}/`}>
							{blogFile.childMarkdownRemark?.frontmatter?.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export default IndexPage;

export const query = graphql`
	query IndexPage {
		allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
			nodes {
				name
				childMarkdownRemark {
					id
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
