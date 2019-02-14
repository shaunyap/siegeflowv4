import React from 'react';
import {Helmet} from "react-helmet";
import Header from './header.js';

import "../styles/global.scss";

export default props => {
    return (
        <div id="root">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Siegeflow</title>
              <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans" rel="stylesheet" />
          </Helmet>

          <title>Siegeflow</title>
          <Header />
            <main>
              {props.children}
              <footer className="flex-center">Copyright siegeflow 2019. Terms and Conditions | Privacy Policy</footer>
            </main>
        </div>
    )
}
