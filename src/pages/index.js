import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';
import { confetti } from 'dom-confetti';
import logo from "../images/logo_square.png"

const confettiConfig = {
  angle: "75",
  spread: 100,
  startVelocity: 40,
  elementCount: "150",
  dragFriction: 0.1,
  duration: 8000,
  delay: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isConfettiDisabled: false
    }
  }

  showSettings (event) {
    event.preventDefault();
  }


  componentDidMount() {
    const confettiCanon = document.querySelector("#helloWorld");
    const target = document.querySelector("#menu-logo");

    confettiCanon.addEventListener("click", () => {
      if (this.state.isConfettiDisabled === false) {
        this.setState({isConfettiDisabled: true});
        confetti(confettiCanon, confettiConfig);
      }
    });
    target.classList.add("home-menu-logo");

    window.addEventListener("scroll",function(){
      target.style.transition = "all 1s";

      if(window.pageYOffset > 100){
        target.style.opacity = 100;
      }
      else if(window.pageYOffset < 100){
        target.style.opacity = 0;
      }
    },false);
  }

  render() {
    const { data } = this.props;
    return (
            <Layout title="Front-end Developer x Web Marketer based in Seattle | React.js">
                <section className="hero flex-center">
                  <div className="intro">
                    <div className="flex-center">
                      <img src = {logo} id = "intro-logo" alt="siegeflow logo"/>
                    </div>
                    <div className="flex-center">
                      <h2 id="helloWorld">Hello world!</h2>
                    </div>
                    <div className="flex-center">
                      <p className="subheader">Frontend Development, Web Marketing</p>
                    </div>
                    <div className="flex-center">
                      <div className="social">
                        <a href="https://www.github.com/shaunyap">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shauny">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/shaunyap">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="copyContainer">
                      <p>I'm Shaun, a front-end developer and digital marketer in Seattle currently working at <a href="https://www.chef.io">Chef Software</a>.</p>
                      <p>In a past life, I did some <a href="https://www.caltex.com/sg/about-us/news/2012/driving-change-with-caltex-community-project-raises-105420-this-past-weekend-for-needy-elderly-nationwide.html">award-winning work</a> at the <a href="https://www.https://wavemakerglobal.com/">agency formerly known as MEC</a> in Asia as well as the Middle East. I was also fortunate to have worked on a diverse variety of projects for freelance clients.</p>  
                        
                      <p>You can see <a href="/projects">a selection of professional and personal projects here.</a></p>

                      <p className="signOff">- shaunyap</p>
                    </div>
                  </div>
                </section>
                <section className="split-container flex-center-med-up">
                  <div className="left-container">
                    <div className="lefty flex-center v-center">
                      <div>
                          <h2><a href="./projects">Projects</a></h2>
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
                          <h2><a href="./blog">Blog</a></h2>
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

export default Index;
