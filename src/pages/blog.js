import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
  function headerImg(node) {
    if (node.frontmatter.thumbnail) {
      console.log("image!")
    } else {
      console.log("no image!")
    }
  }

    return (
        <Layout title="Blog: Front-end Developer based in Seattle | React.js | Swift">
          <div className="flex-center">
            <div className="blog-index">
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges
                .filter(({node}) => node.frontmatter.category==="blog")
                .map( ({ node }, index) =>
                    <div key={index}>
                        {headerImg(node)}
                        <div className="post-meta">
                            <a href={node.frontmatter.path}>
                            <img src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="siegeflow blog"/>
                            </a>

                            <h3><a href={node.frontmatter.path}>{node.frontmatter.title}</a></h3>
                            <p className="subtext">{node.headings[0].value}</p>
                        </div>
                    </div>
            )}
            </div>
            </div>
        </Layout>
    );
  }


export default Blog;

export const query = graphql`
    query getPosts {
    allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
    )
        {
            edges {
                node {
                  headings {
                    value
                    depth
                  }
                  frontmatter {
                      title
                      path
                      category
                      tags
                      thumbnail {
                          childImageSharp {
                              fluid {
                                  src
                              }
                          }
                      }
                    }
                }
            }
        }
    }
`
