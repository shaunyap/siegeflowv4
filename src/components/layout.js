import React from 'react';
import {Helmet} from "react-helmet";
import Header from './header.js';

import "../styles/global.scss";

export default props => {
    return (
        <div id="root">
          <Helmet>
              <meta charSet="utf-8" />
              <title>{props.title}</title>
              <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans|Ruthie" rel="stylesheet" />
          </Helmet>
          <Header />
          <main>
            {props.children}
          </main>
          <footer className="flex-center">&copy; siegeflow 2019.</footer>
        </div>
    )
}
