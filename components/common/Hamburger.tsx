import React, { useState } from "react"
import NavLink from "./NavLink";

const Hamburger = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }


  return (
    <nav className="navbar">
      <div className="container"></div>
    <button className="hamburger " onClick={handleToggle}>{navbarOpen ? "" : "Menu"}
    <span></span>
    <span></span>
    <span></span>
    </button>
        <ul className={`navbar-menu-hamburger ${navbarOpen ? " showMenu" : ""}`}>

          <li className="nav-itemHamb">
            <NavLink href="/about" as="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-itemHamb ">
            <NavLink href="/blog" as="/blog">
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-itemHamb">
            <NavLink href="/bees" as="/bees">
              <span>Bees</span>
            </NavLink>
          </li>
          <li className="nav-itemHamb">
            <NavLink href="/honey" as="/honey">
              <span>Honey</span>
            </NavLink>
          </li>
          <li className="nav-itemHamb">
            <NavLink href="/" as="/">
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
    </nav>
  )
};

export default Hamburger;