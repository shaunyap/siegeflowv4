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
    confettiCanon.addEventListener("click", () => {
      if (this.state.isConfettiDisabled === false) {
        this.setState({isConfettiDisabled: true});
        confetti(confettiCanon, confettiConfig);
      }
    });

    window.addEventListener("scroll",function(){
      const target = document.querySelector("#menu-logo");
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
            <Layout title="Front-end Developer based in Seattle | React.js | Swift">
                <section className="hero flex-center">
                  <div className="intro">
                    <div className="flex-center">
                      <img src = {logo} id = "intro-logo" alt="siegeflow logo"/>
                    </div>
                    <div className="flex-center">
                      <h2 id="helloWorld">Hello world!</h2>
                    </div>
                    <div className="flex-center">
                      <p className="subheader">Frontend Development in React.js, JavaScript, Swift</p>
                    </div>
                    <hr />
                    <p>I'm Shaun, and after spending the last four years working on <a href="/">personal coding projects</a>, I'm now looking for a career switch to React or iOS development.</p>

                    <p>Previously, I've had an exhilarating career in digital marketing which has taken me everywhere from Singapore to Dubai, San Francisco to Taipei. <span id="sma-hover">I've even picked up some awards along the way.</span></p>

                    <p>Despite that, I've always had a feeling that my true calling lay elsewhere. And after years of tinkering and experimenting, I'm ready to show I have what it takes to thrive.</p>

                    <p>So let me buy you coffee. Better yet, let me show you on a whiteboard.</p>

                    <p className="signOff">- shaunyap</p>
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
