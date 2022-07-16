import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout title="Home">
      <header>
        <p className="h1Pages">Hello!</p>
        <h1 className="pPages">
          I'm <strong>Sina Atalay</strong>.
        </h1>
      </header>
      <main>
        <p className="pPages">I'm a senior mechanical engineering student at Bogazici University.</p>
        <p className="pPages">
          As a fun exercise, I decided to build this webpage with <a href="https://tailwindcss.com/">Tailwindcss</a> and{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>.
        </p>
        <p className="pPages">
          In the <Link to="/projects">Projects</Link> section, you can find brief reports of projects I have been involved in.
        </p>
        <div className="py-4">
          <div className="w-full border-t-2 border-neutral-300"></div>
        </div>
        <h2 className="h2Pages">
          About Ionizer
        </h2>
        <p className="pPages">
          In Spring 2022, I started to work on an ion truster simulation program (<strong>Ionizer</strong>) at{" "}
          <a href="http://bustlab.boun.edu.tr/">Bogazici University Space Technologies Laboratory</a> with Professor Murat Çelik.
        </p>
        <p className="pPages">
          It's a tricky simulation because the applicability of the continuum assumption is questionable since the operating
          pressures are pretty low. Therefore, the molecular theory has to be employed.
        </p>
        <p className="pPages">
          Ionizer is being written in C++, and its goal is to solve the 3D{" "}
          <a href="https://en.wikipedia.org/wiki/Poisson%27s_equation">Poisson's equation</a> to calculate the electrostatic field
          inside the thruster and move the ions accordingly with the well-established molecular approach, PIC-DSMC.
        </p>
        <p className="pPages">Currently, it solves 3D Poisson's equation for the potential field, which is how it looks:</p>
        <div className="relative w-full md:w-11/12 mx-auto">
          <StaticImage src="../images/IonizerPreview.png" alt="Ionizer" placeholder="blurred" />
        </div>
        <p className="pPages">
          To check out the repository and contribute on Github, click <a href="https://github.com/sinaatalay/Ionizer">here</a>.
        </p>
        <div className="py-4">
          <div className="w-full border-t-2 border-neutral-300"></div>
        </div>
        <h2 className="h2Pages">
          About My YouTube Channel
        </h2>
        <p className="pPages">
          In June 2020, I instructed the entire <em>Engineering Mechanics: Dynamics</em> course on YouTube, which has so far
          received more than 200,000 views. You can see two of my videos below.
        </p>
        <div className="flex flex-col mb-3">
          <div className="relative w-full pt-[56.25%] md:w-[70%] md:pt-[39.375%] mx-auto">
            <iframe
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              src="https://www.youtube.com/embed/KWa4V1s4yug"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="relative mt-3 w-full pt-[56.25%] md:w-[70%] md:pt-[39.375%] mx-auto">
            <iframe
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              src="https://www.youtube.com/embed/perz7qJG7qc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </Layout>
  )
}
