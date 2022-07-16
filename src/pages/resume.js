import React from "react"
import Layout from "../components/Layout"
import JSONData from "../resume/resume.json"

export default function Resume() {
  return (
    <Layout>
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
                    Project link: <a href={data.href}>{data.url}</a>
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
              <ul class="list-disc list-inside md:ml-2">
                <li>
                  <strong>Software:</strong> {JSONData.skills.software}
                </li>
                <li>
                  <strong>Programming:</strong> {JSONData.skills.programming}
                </li>
                <li>
                  <strong>Languages:</strong> {JSONData.skills.languages}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
