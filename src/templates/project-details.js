import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
require(`katex/dist/katex.min.css`)

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { abstract, author, date, title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <main className="mt-10">
        <header>
          <h1>{title}</h1>
          <p>{author}</p>
          <p>{date}</p>
        </header>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <aside></aside>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        abstract
        author
        date
        title
      }
    }
  }
`
