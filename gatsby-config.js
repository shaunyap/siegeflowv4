module.exports = {
  siteMetadata: {
    title: "React.JS / Swift development | Siegeflow",
    author: "Shaun Yap",
    description: "A frontend developer portfolio built using Gatsby.js"
  },
   plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/posts`,
          name: "posts",
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              }
            }
          ]
        }
      }, 
      `gatsby-plugin-sass`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1080,
        },
      }
    ]
}
