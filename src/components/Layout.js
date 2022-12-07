import React from "react"
import Navbar from "./Navbar"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export default function Layout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        {title === "Home" ? <title>Sina Atalay</title> : <title>{title} - Sina Atalay</title>}
      </Helmet>
      <Navbar />

      <div className="bg-neutral-50 px-6 md:px-8 py-4 md:rounded-t-md flex-grow print:bg-white">{children}</div>

      <footer className="bg-primary-500 md:mb-6 md:rounded-b-md px-2 py-3 md:p-3 flex flex-row font-normal">
        <p className="p-0 m-0 flex-grow ml-2 text-secondary-500 print:text-black">
          Copyright © {new Date().getFullYear()}{" "}
          <Link to="/resume" className=" text-secondary-500 hover:text-secondary-600 transition ease-out duration-200 print:text-black">
            Sina Atalay
          </Link>
        </p>
        <OutboundLink href="https://github.com/sinaatalay" className="mr-2 my-auto print:hidden" title="GitHub">
          <FaGithub className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/sina-atalay/" className="mx-2 my-auto print:hidden" title="LinkedIn">
          <FaLinkedin className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </OutboundLink>
        <OutboundLink href="https://www.youtube.com/c/SinaAtalay" className="mx-2 my-auto print:hidden" title="YouTube">
          <FaYoutube className="text-2xl text-secondary-500 hover:text-secondary-600 transition ease-out duration-200" />
        </OutboundLink>
      </footer>
    </div>
  )
}
