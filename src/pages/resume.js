import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import ResumeEntry from "../components/ResumeEntry"
import ResumeHeading from "../components/ResumeHeading"
import ResumeSection from "../components/ResumeSection"
import JSONData from "../data/resume.json"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export default function Resume() {
  return (
    <Layout title="Resume">
      <header>
        <h1 className="font-body text-3xl mt-6 text-center">Sina Atalay</h1>
      </header>
      <main className="font-body mt-6">
        <ResumeHeading>Education</ResumeHeading>
        <ResumeSection>
          {JSONData.education.map(data => (
            <ResumeEntry>
              <p className="w-12 flex-none hidden md:block">
                <strong>{data.studyType}</strong>
              </p>
              <div className="flex-grow">
                <p>
                  <strong>{data.institution}</strong>, {data.area}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeHeading>Experience</ResumeHeading>
        <ResumeSection>
          {JSONData.experience.map(data => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.position}</strong>, {data.name}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeHeading>Projects</ResumeHeading>
        <ResumeSection>
          {JSONData.projects.map(data => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}

                  <li>
                    Project link:{" "}
                    {data.href.charAt(0) === "/" ? (
                      <Link to={data.href}>{data.url}</Link>
                    ) : (
                      <OutboundLink href={data.href}>{data.url}</OutboundLink>
                    )}
                  </li>
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeHeading>Certificates</ResumeHeading>
        <ResumeSection>
          {JSONData.certificates.map(data => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="resumeDateAndLocationMobile">{data.date}</p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                  <li>
                    Course Certificate:{" "}
                    <OutboundLink href={data.href}>{data.url}</OutboundLink>
                  </li>
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeHeading>Skills</ResumeHeading>
        <ResumeSection>
          <ResumeEntry>
            <div className="flex-grow">
              <p>
                <strong>Software:</strong> {JSONData.skills.software}
              </p>
              <p>
                <strong>Programming:</strong> {JSONData.skills.programming}
              </p>
              <p>
                <strong>Languages:</strong> {JSONData.skills.languages}
              </p>
            </div>
          </ResumeEntry>
        </ResumeSection>

        <ResumeHeading>Extracurricular Activities</ResumeHeading>
        <ResumeSection>
          {JSONData.extracurricular.map(data => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.position}</strong>, {data.name}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li className="pl-0 ml-0">{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>
      </main>
    </Layout>
  )
}
