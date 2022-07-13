import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="mainNav">
      <ul className="flex justify-between font-primary">
        <li>
          <Link to="/" className="navItem" activeClassName="activeNavItemLeft">
            Home
          </Link>
        </li>
        <li>
        <Link
            to="/projects"
            className="navItem"
            activeClassName="activeNavItemCenter"
          >Projects</Link>
        </li>
        <li>
          <Link
            to="/resume"
            className="navItem"
            activeClassName="activeNavItemCenter"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="navItem"
            activeClassName="activeNavItemRight"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
