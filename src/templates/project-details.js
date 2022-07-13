import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
require(`katex/dist/katex.min.css`)

export default function ProjectDetails({ data }) {
  const { html, tableOfContents } = data.markdownRemark
  const { abstract, author, date, title } = data.markdownRemark.frontmatter

  console.log(tableOfContents)

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <p className="author">by {author}</p>
        <p className="date">{date}</p>
      </header>

  
      <div className="abstract">
        <h2 className="nocount">Abstract</h2>
        <p>{abstract}</p>
      </div>

      <nav role="navigation">
        <h2 className="nocount">Contents</h2>
        <div className="toc" dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
      </nav>

      <main>
      <article dangerouslySetInnerHTML={{ __html: html }} />
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
      tableOfContents
    }
  }
`
