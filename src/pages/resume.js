import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import JSONData from "../data/resume.json"

export default function Resume() {
  return (
    <Layout title="Resume">
      <header>
        <h1 className="font-body text-3xl mt-6 text-center">Sina Atalay</h1>
      </header>
      <main className="font-body mt-6">
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Education</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          {JSONData.education.map(data => (
            <div className="resumeEntry">
              <p className="w-12 flex-none hidden md:block">
                <strong>{data.studyType}</strong>
              </p>
              <div className="resumeEntryCenter">
                <p>
                  <strong>{data.institution}</strong>, {data.area}
                </p>
                <p className="md:hidden text-neutral-600">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeEntryRight hidden md:block">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Experience</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          {JSONData.experience.map(data => (
            <div className="resumeEntry">
              <div className="resumeEntryCenter">
                <p>
                  <strong>{data.position}</strong>, {data.name}
                </p>
                <p className="md:hidden text-neutral-600">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeEntryRight hidden md:block">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Projects</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          {JSONData.projects.map(data => (
            <div className="resumeEntry">
              <div className="resumeEntryCenter">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="md:hidden text-neutral-600">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}

                  <li>
                    Project link:{" "}
                    {data.href.charAt(0) === "/" ? <Link to={data.href}>{data.url}</Link> : <a href={data.href}>{data.url}</a>}
                  </li>
                </ul>
              </div>
              <div className="resumeEntryRight hidden md:block">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Certificates</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          {JSONData.certificates.map(data => (
            <div className="resumeEntry">
              <div className="resumeEntryCenter">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="md:hidden text-neutral-600">{data.date}</p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li>{highlights}</li>
                  ))}
                  <li>
                    Course Certificate: <a href={data.href}>{data.url}</a>
                  </li>
                </ul>
              </div>
              <div className="resumeEntryRight hidden md:block">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Skills</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          <div className="resumeEntry">
            <div className="resumeEntryCenter">
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
          </div>
        </div>
        {/* ===========================
        ===============================
        ===============================
        =============================== */}
        <h2 className="h2Resume">Extracurricular Activities</h2>
        <div>
          <div className="w-full border-t-[2px] border-neutral-300"></div>
        </div>
        <div className="mb-3">
          {JSONData.extracurricular.map(data => (
            <div className="resumeEntry">
              <div className="resumeEntryCenter">
                <p>
                  <strong>{data.position}</strong>, {data.name}
                </p>
                <p className="md:hidden text-neutral-600">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc list-inside md:ml-2">
                  {data.highlights.map(highlights => (
                    <li className="pl-0 ml-0">{highlights}</li>
                  ))}
                </ul>
              </div>
              <div className="resumeEntryRight hidden md:block">
                <p>{data.location}</p>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
