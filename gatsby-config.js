module.exports = {
  siteMetadata: {
    title: "Frontend development | Siegeflow",
    author: "Shaun Yap",
    description: "A frontend developer portfolio built on Gatsby.js"
  },
   plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/posts`,
          name: "posts",
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-sass`,
    ]
}
