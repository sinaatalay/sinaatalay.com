import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="layout">{children}</div>
      <footer>
        <p>Copyright 2022 Sina Atalay</p>
      </footer>
    </div>
  )
}
