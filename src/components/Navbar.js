import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="text-xl my-6 mx-3 md:mx-0">
      <ul className="flex justify-between font-primary">
        <li>
          <Link to="/" className="p-2" activeClassName="p-2 border-b-4 border-secondary-500 text-primary-800 md:rounded-bl-sm">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="p-2" activeClassName="p-2 border-b-4 border-secondary-500 text-primary-800">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className="p-2" activeClassName="p-2 border-b-4 border-secondary-500 text-primary-800">
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="p-2"
            activeClassName="p-2 border-b-4 border-secondary-500 text-primary-800 md:rounded-br-sm"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
