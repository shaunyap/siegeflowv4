import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  return (
          <Layout>
              <section className="hero flex-center">
                <div className="intro">
                  <h1>Hello world!</h1>
                  <p>I'm Shaun, and I'm looking for a career switch to React or iOS development. I've spent the last four years working on personal coding projects, and sometimes even maneuvering into my full-time gig.</p>

                  <p>Previously, I've had an exciting career in digital marketing which has taken me everywhere from Singapore to Dubai, San Francisco to Taipei. I've even picked up some awards along the way.</p>

                  <p>Despite that, I've always had a niggling feeling that my true passions lay elsewhere. My journey has taken me into the world of development. And after years of learning and experimenting, I'm ready to show I have what it takes to thrive.</p>

                  <p> So let me buy you coffee. Better yet, let me show you on a whiteboard.</p>
                </div>
              </section>
              <section className="split-container flex-center-med-up">
                <div className="left-container">
                  <div className="lefty flex-center v-center">
                    <div>
                        <h2>Projects</h2>
                        <ul>
                          <li><a href="./projects/chatq">Creating a referral rewards system with Viral Loops and React.js</a></li>
                          <li>thing</li>
                          <li>thing</li>
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div className="righty flex-center v-center">
                    <div>
                        <h2>Blog</h2>
                        <ul>
                        {data.allMarkdownRemark.edges.map( ({ node }, index) => 
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
  allMarkdownRemark (filter: {
      frontmatter:{
        category:{
          eq:"blog"
        }
      }
    },
    limit: 5
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
