import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <header>
        <h1 className="h1Pages">Projects</h1>
      </header>
      <main className="font-primary">
        <p className="pPages">Below is a list of all projects that I have posted to the site.</p>
        <div>
          {projects.map(project => (
            <div className="mt-8 flex flex-row w-[80%] mx-auto">
              <div className="flex-grow">
                <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                  <h2 className="font-light my-1 text-left text-xl text-primary-500 font-primary">{project.frontmatter.title}</h2>
                </Link>
                <p className="font-light my-1 text-left text-xl text-neutral-900 font-primary">
                  {project.frontmatter.shortAbstract}
                </p>
              </div>
              <div>
                {" "}
                <p className="font-light my-1 text-left text-xl text-neutral-900 font-primary">{project.frontmatter.date}</p>
              </div>
            </div>
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
          shortAbstract
        }
        id
      }
    }
  }
`
