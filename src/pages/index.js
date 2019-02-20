import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';

export default ({ data }) => {
  return (
          <Layout>
              <section className="hero flex-center">
                <div className="intro">
                  <h1>Hello world!</h1>
                  <p>I'm Shaun, and after spending the last four years working on <a href="/">personal coding projects</a>, I'm now looking for a career switch to React or iOS development.</p>

                  <p>Previously, I've had an exhilarating career in digital marketing which has taken me everywhere from Singapore to Dubai, San Francisco to Taipei. <span id="sma-hover">I've even picked up some awards along the way.</span></p>

                  <p>Despite that, I've always had a feeling that my true passions lay elsewhere. And after years of tinkering and experimenting, I'm ready to show I have what it takes to thrive.</p>

                  <p>So let me buy you coffee. Better yet, let me show you on a whiteboard.</p>
                </div>
              </section>
              <section className="split-container flex-center-med-up">
                <div className="left-container">
                  <div className="lefty flex-center v-center">
                    <div>
                        <h2>Projects</h2>
                        <ul>
                        {data.allMarkdownRemark.edges
                          .filter(({node}) => node.frontmatter.category==="project") 
                          .map( ({ node }, index) => 
                          (
                            <li key={index}>
                              <Link to = {node.frontmatter.path}>
                                {node.frontmatter.title}
                              </Link>
                            </li>
                          )
                        )}
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div className="righty flex-center v-center">
                    <div>
                        <h2>Blog</h2>
                        <ul>
                        {data.allMarkdownRemark.edges
                          .filter(({node}) => node.frontmatter.category==="blog") 
                          .map( ({ node }, index) => 
                          (
                            <li key={index}>
                              <Link to = {node.frontmatter.path}>
                                {node.frontmatter.title}
                              </Link>
                            </li>
                          )
                        )}
                        </ul>
                    </div>
                  </div>
                </div>
              </section>
          </Layout>
  )
}

export const query = graphql`
query getMarkdownPosts {
  allMarkdownRemark (
    sort: { fields: [frontmatter___date], order: DESC }
  )
    {
      edges {
        node {
          frontmatter {
              title
              path
              date
              category
          }
        }
      }
    }
}
`
