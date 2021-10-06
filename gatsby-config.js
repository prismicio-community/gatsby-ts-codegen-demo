require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "gatsby-ts-codegen-demo",
	},
	plugins: [
		// The following plugins allow us to query our local Markdown files.
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/src/blog`,
			},
		},
		"gatsby-transformer-remark",
	],
};
