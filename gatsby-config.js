require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `gatsby-shopify-debugging`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
		// https://www.gatsbyjs.com/plugins/gatsby-source-shopify/
		resolve: "gatsby-source-shopify",
		options: {
			password: process.env.SHOPIFY_SHOP_PASSWORD,
			storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
			shopifyConnections: ["collections"],
			// prioritize: process.env.IS_PRODUCTION ? true : false
		},
	}]
};