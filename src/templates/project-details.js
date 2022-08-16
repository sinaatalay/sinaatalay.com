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
        <article className="md:px-14 text-base font-body leading-relaxed pb-4 print:break-inside-auto text-neutral-900 print:text-black">
          <header className="print:flex print:flex-col print:h-screen print:justify-center">
            <h1 className="text-center text-4xl leading-[3rem] mt-14 print:mt-0">
              {title}
            </h1>
            <p className="my-4 text-center whitespace-pre-wrap">by {author}</p>
            <p className="my-4 text-center">{date}</p>
            <div className="my-14 text-center">
              <h2 className="text-base font-bold">Abstract</h2>
              <p className="mt-4 font-normal">{abstract}</p>
            </div>
          </header>
          <nav role="navigation">
            <h2 className="text-3xl leading-8 mt-12 print:break-before-page">
              Contents
            </h2>
            <div
              className="toc mt-4"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            ></div>
          </nav>

          <div
            className="markdownHtml"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
