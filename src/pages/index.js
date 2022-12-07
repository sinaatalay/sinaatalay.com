import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const { html } = data.markdownRemark

  return (
    <Layout title="Home">
      <header>
        <p className="h1Pages">Hello!</p>
        <h1 className="pPages">
          I'm <strong>Sina Atalay</strong>.
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
