import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
require(`katex/dist/katex.min.css`)

export default function ProjectDetails({ data }) {
  const { html, tableOfContents } = data.markdownRemark
  const { abstract, author, date, title } = data.markdownRemark.frontmatter

  return (
    <Layout title={title}>
      <main>
        <article>
          <header>
            <h1>{title}</h1>
            <p className="author">by {author}</p>
            <p className="date">{date}</p>

            <div className="abstract">
              <h2 className="nocount">Abstract</h2>
              <p>{abstract}</p>
            </div>
          </header>
          <nav role="navigation">
            <h2 className="nocount">Contents</h2>
            <div className="toc" dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
          </nav>

          <div className="mdHtml" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
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
