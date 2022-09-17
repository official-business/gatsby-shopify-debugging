## Notes

This is a fresh site using `gatsby new` with the [gatsby-source-shopify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-shopify#readme) plugin.

This is to help debug any issues with sourcing data from Shopify using the plugin, which uses the GraphQL Bulk API.


## 🚀 Quick start

1.  **Create environment files**

    Create 2 new files `.env.development` and `.env.production`, with the following:

    ```shell
    # .env.development + .env.production
    GATSBY_SHOPIFY_STORE_URL=your-store.myshopify.com
		SHOPIFY_SHOP_PASSWORD=shpat_xxxxxxxxxxxxxxxxxxxxxxx
    ```
		Use the store url and password in the app that has been setup.

		More about the gatsby-source-shopify plugin here: [Gatsby Docs](https://www.gatsbyjs.com/plugins/gatsby-source-shopify/)

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-shopify-debugging/
		npm install
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
