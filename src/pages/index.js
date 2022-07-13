import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <header>
        <p className="h1Pages">Hello!</p>
        <h1 className="pPages">
          I'm <strong>Sina Atalay</strong>.
        </h1>
      </header>
      <main>
        <p className="pPages">I'm a senior mechanical engineering student at Bogazici University.</p>
        <p className="pPages">
          As a fun exercise, I decided to do this webpage with <a href="https://tailwindcss.com/">Tailwindcss</a> and{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>. In this website, you can find notes on what I had worked on.
        </p>
        <p className="pPages">
          In <Link to="/projects">Projects</Link> section, you can find brief reports of projects I have been involved in.
        </p>

        <div className="py-4">
          <div className="w-full border-t-2 border-neutral-300"></div>
        </div>

        <h2 className="h2Pages">
          About{" "}
          <em>
            <strong>Ionizer</strong>
          </em>
        </h2>
        <p className="pPages">
          In Spring 2022, I have started to work on an ion truster simulation program at{" "}
          <a href="http://bustlab.boun.edu.tr/">Bogazici University Space Technologies Laboratory</a>, with Professor Murat Çelik.
        </p>
        <p className="pPages">
          It's a C++ program which solves 3D <a href="https://en.wikipedia.org/wiki/Poisson%27s_equation">Poisson's equation</a>{" "}
          to calculate electrostatic field, and then accelerates and moves the ions for a short time step with PIC-DSMC method.
          And then solves the poisson's equation again at it goes on. Currently, only the poisson's
        </p>
        <p className="pPages">
          To check out the Ionizer repository in Github, click <a href="https://github.com/sinaatalay/Ionizer">here</a>.
        </p>

        <div className="py-4">
          <div className="w-full border-t-2 border-neutral-300"></div>
        </div>

        <h2 className="h2Pages">About My YouTube Channel</h2>
        <p className="pPages">
          In June 2020, I instructed the entire "Engineering Mechanics: Dynamics" course on YouTube, which has so far received
          more than 200,000 views. You can see two of my videos below.
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
