import React, { Component } from "react"
import Layout from '../components/layout';

class IndexPage extends Component {

    render() {
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
                      <h2>Past Projects</h2>
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
