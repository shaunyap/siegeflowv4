import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

export default Header => {
  return (
    <div>
      <header className="topbar">
      <h3 id="menu-logo"><a href="/">siegeflow</a></h3>
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="blog" className="menu-item" href="/blog">Blog</a>
        <a id="contact" className="menu-item" href="mailto:shaun@siegeflow.com">Contact</a>
        <a id="email" href="mailto:shaun@siegeflow.com">shaun@siegeflow.com</a>
      </Menu>
      </header>
    </div>
  )
}
