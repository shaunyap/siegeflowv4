import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { confetti } from 'dom-confetti';
const confettiConfig = {
  angle: "0",
  spread: 45,
  startVelocity: 100,
  elementCount: "150",
  dragFriction: 0.1,
  duration: 3000,
  delay: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

class Header extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  componentDidMount() {
    const button = document.querySelector("#menu-logo");
    button.addEventListener("click", () => confetti(button, confettiConfig));
  }
  render() {
    return (
      <div>
        <header className="topbar">
        <h3 id="menu-logo">siegeflow</h3>
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="projects" className="menu-item" href="/projects">Projects</a>
          <a id="blog" className="menu-item" href="/blog">Blog</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        </header>
      </div>
    )
  }
}

export default Header;