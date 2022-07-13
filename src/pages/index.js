import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <header className="font-primary">
        <p className="mb-4 text-6xl font-thin mx-[-4px] text-neutral-900">Hello!</p>
        <h1 className="font-light my-0 text-left text-xl">
          I'm <strong>Sina Atalay</strong>.
        </h1>
      </header>
      <main className="font-primary">
        <p className="indexParagraphs">I'm a senior mechanical engineering student at Bogazici University.</p>
        <p className="indexParagraphs">
          As a fun exercise, I decided to do this webpage with <a href="https://tailwindcss.com/">Tailwindcss</a> and
          <a href="https://www.gatsbyjs.com/">Gatsby</a>. In this website, you can find notes on what I had worked on.
        </p>
        <p className="indexParagraphs">
          In <Link to="/projects">Projects</Link> section, you can find brief reports of projects I have been involved in.
        </p>
        <div class="py-4">
          <div class="w-full border-t-2 border-neutral-300"></div>
        </div>
        <h2 className="my-0 text-left text-4xl font-thin nocount">
          About
          <em>
            <strong>Ionizer</strong>
          </em>
        </h2>
        <p className="indexParagraphs">
          In Spring 2022, I have started to work on an ion truster simulation program at
          <a href="http://bustlab.boun.edu.tr/">Bogazici University Space Technologies Laboratory</a>, with my professor. It's a
          C++ program which solves
          <a href="https://en.wikipedia.org/wiki/Poisson%27s_equation">Poisson's equation</a> to calculate electrostatic field,
          and then accelerates and moves the ions for a short time step with PIC-DSMC method. And then solves the poisson's
          equation again at it goes on. Currently, only the poisson's
        </p>
      </main>
    </Layout>
  )
}
