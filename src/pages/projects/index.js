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
        <div className="mt-8">
          {projects.map(project => (
            <div>
              <div className="flex flex-row mx-auto">
                <div className="flex-grow">
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <h2 className="font-light text-left text-xl text-primary-500 font-primary">
                      {project.frontmatter.title}
                    </h2>
                  </Link>
                  <p className="font-light text-left text-xl text-neutral-900 font-primary">
                    {project.frontmatter.shortAbstract}
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="font-light text-left text-xl text-neutral-900 font-primary">{project.frontmatter.date}</p>
                </div>
              </div>
              <div className="py-2">
                <div className="w-full border-t-[1px] border-neutral-300"></div>
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
