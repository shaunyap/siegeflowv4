import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <head>
          <title>Siegeflow</title>
        </head>
        <nav className = "topbar">
          <ul className = "hide-on-mobile">
            <li>Siegeflow</li>
            <li>About</li>
            <li>Work</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
