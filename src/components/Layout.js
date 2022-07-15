import React from "react"
import Navbar from "./Navbar"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="bg-neutral-50 px-4 md:px-8 py-4 md:rounded-t-md flex-grow">{children}</div>

      <footer className="bg-primary-500 md:mb-6 md:rounded-b-md p-3 flex flex-row">
        <p className="p-0 m-0 flex-grow ml-2 text-secondary-500">
          Copyright © {new Date().getFullYear()}
          <Link to="/resume" className=" text-secondary-500 mx-2 hover:text-secondary-600 transition ease-out duration-200">
            Sina Atalay
          </Link>
        </p>
        <a href="https://github.com/sinaatalay" className="mx-2 my-auto">
          <FaGithub className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/sina-atalay/" className="mx-2 my-auto">
          <FaLinkedin className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </a>
        <a href="https://www.youtube.com/c/SinaAtalay" className="mx-2 my-auto">
          <FaYoutube className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </a>
      </footer>
    </div>
  )
}
