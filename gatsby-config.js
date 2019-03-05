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
                maxWidth: 768,
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
      },
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/favicon.png",

          // WebApp Manifest Configuration
          appName: null, // Inferred with your package.json
          appDescription: null,
          developerName: null,
          developerURL: null,
          dir: 'auto',
          lang: 'en-US',
          background: '#fff',
          theme_color: '#fff',
          display: 'standalone',
          orientation: 'any',
          start_url: '/?homescreen=1',
          version: '1.0',

          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }
      },
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-74688273-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
    }
    ]
}
