import React from 'react';
import Header from './header.js';

import "../styles/global.scss";

export default props => {
    return (
        <div>
          <Header />
            <main>
              {props.children}
              <footer className="text-center">Copyright siegeflow 2019. Terms and Conditions | Privacy Policy</footer>
            </main>
        </div>
    )
}
