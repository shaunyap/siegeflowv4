import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Project = ({ data }) => {
    return (
        <Layout title="Projects: Front-end Developer based in Seattle | React.js | Swift">
            <h1>Projects</h1>
            <div className="flexgrid">
            {data.allMarkdownRemark.edges
                .filter(({node}) => node.frontmatter.category==="project")
                .map( ({ node }, index) =>
                (
                    <div className="card col" key={index}>
                        <a href={node.frontmatter.path}><img src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="placeholder" /></a>
                        <div className="project-meta">
                            <h3><a href={node.frontmatter.path}>{node.frontmatter.title}</a></h3>
                            <p className="subtext">
                                {node.frontmatter.tags.join(", ")}
                            </p>
                        </div>
                    </div>
                )
            )}
            </div>
        </Layout>
    );
  }


export default Project;

export const query = graphql`
    query getProjects {
    allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
    )
        {
            edges {
                node {
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
