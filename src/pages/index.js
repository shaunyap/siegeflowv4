import React, { Component } from "react"
import Layout from '../components/Layout';

class IndexPage extends Component {

    render() {
        return (
        <Layout>
            <section className="hero flex-center">
              <div className="intro">
                <h1>Hello world!</h1>
                <p>Hello! My name is Shaun. Born and raised in sunny Singapore, I am a digital marketer and web developer currently living in Seattle by way of Dubai. </p>
                <p>I’ve spent my career creating digital experiences and strategic brand communications, working with everyone from large media agencies to venture-backed startups, winning some awards along the way. Then I went indie.</p>
                <p>If you are looking to build your digital capabilities, align your brand strategy, or want to hang out for coffee, get in touch here!</p>
              </div>
            </section>
            <section className="split-container flex-center-med-up">
              <div className="left-container">
                <div className="lefty flex-center v-center">
                  <div>
                      <h2>Projects</h2>
                      <ul>
                        <li>thing</li>
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
                        <li>thing</li>
                        <li>thing</li>
                        <li>thing</li>
                      </ul>
                  </div>
                </div>
              </div>
            </section>
        </Layout>
    )}

}

export default IndexPage
