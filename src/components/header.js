import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'

class Header extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <header className="topbar">
        <h3>siegeflow</h3>
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="projects" className="menu-item" href="/projects">Projects</a>
          <a id="blog" className="menu-item" href="/blog">Blog</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        </header>
      </div>
    )
  }
}

export default Header;