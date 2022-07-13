import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <header className="font-primary">
        <p className="mb-4 text-6xl font-thin mx-[-4px]">Hello!</p>
        <h1 className="font-light my-0 text-left text-xl">
          I'm <strong>Sina Atalay</strong>.
        </h1>
      </header>
      <main className="font-primary">
        <p className="indexParagraphs">
          I'm a senior mechanical engineering student at Bogazici University.
        </p>
        <p className="indexParagraphs">
          As a fun exercise, I decided to do this webpage with{" "}
          <a href="https://tailwindcss.com/">Tailwindcss</a> and{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>. In this website, you
          can find notes on what I had worked on.
        </p>

        <div class="py-4">
          <div class="w-full border-t-2 border-neutral-300"></div>
        </div>
      </main>
    </Layout>
  )
}
