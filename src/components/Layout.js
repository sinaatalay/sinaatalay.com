import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="bg-neutral-50 px-8 py-4 md:rounded-t-md flex-grow">{children}</div>
      <footer className="bg-primary-500 md:mb-6 md:rounded-b-md p-3">
        <p className="p-0 m-0">Copyright 2022 Sina Atalay</p>
      </footer>
    </div>
  )
}
