import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const { html } = data.markdownRemark

  return (
    <Layout Title="Home">
      <header className="my-5">
        <h1 className="pPages">
          Hello! I'm <strong>Sina Atalay</strong>.
        </h1>
      </header>
      <main className="markdownPages" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { title: { eq: "Home" } }) {
      html
    }
  }
`
