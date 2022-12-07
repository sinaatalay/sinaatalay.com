import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout title="Projects">
      <header>
        <h1 className="h1Pages">Projects</h1>
      </header>
      <main>
        <p className="pPages">Below is a list of all my projects posted on this site.</p>
        <div className="mt-8">
          {projects.map((project) => (
            <div>
              <div className="flex flex-row mx-auto">
                <div className="flex-grow">
                  <h2 className=" text-left text-xl text-primary-500">
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                      {project.frontmatter.title}{" "}
                    </Link>
                  </h2>
                </div>
                <p className="flex-none w-32  text-right text-xl text-neutral-900">{project.frontmatter.date}</p>
              </div>
              <p className="mt-1 md:mt-0 md:mr-32  text-left text-lg text-neutral-900">{project.frontmatter.shortAbstract}</p>
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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___order }, filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
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
