import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className = "topbar">
            <ul className = "hide-on-mobile">
              <li>Siegeflow</li>
              <li>About</li>
              <li>Work</li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
