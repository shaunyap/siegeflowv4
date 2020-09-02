import React from 'react';
import {Helmet} from "react-helmet";
import Header from './header.js';

import "../styles/global.scss";

export default props => {
  const date = new Date();
  const year = date.getFullYear();

    return (
        <div id="root">
          <Helmet>
              <meta charSet="utf-8" />
              <title>{props.title}</title>
              <link href="https://fonts.googleapis.com/css?family=Oswald|Noto+Sans|Ruthie" rel="stylesheet" />
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev" crossorigin="anonymous" />
          </Helmet>
          <Header />
          <main>
            {props.children}
          </main>
          <footer className="flex-center">
            <div>
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
              <p className="subtext">&copy; siegeflow {year}</p>
            </div>
          </footer>
        </div>
    )
}
