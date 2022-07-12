import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <header>
        <h1>Projects</h1>
      </header>
      <main>
        <p>Welcome to my website!</p>
        <div>
          {projects.map(project => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <h2>{project.frontmatter.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___order }) {
      nodes {
        frontmatter {
          abstract
          date
          title
          slug
          author
        }
        id
      }
    }
  }
`
