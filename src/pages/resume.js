import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import ResumeEntry from "../components/ResumeEntry"
import ResumeSection from "../components/ResumeSection"
import JSONData from "../contents/resume/resume.json"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import moment from "moment"

export default function Resume() {
  return (
    <Layout title="Resume">
      <header className="relative">
        <h1 className="font-semibold text-3xl mt-7 text-center">{JSONData.basics.name}</h1>
        <h2 className="font-light text-lg mt-3 text-center">{JSONData.basics.label}</h2>
        <p className="absolute text-xs text-right top-0 -mt-6 w-full">Last updated in {moment(Date.now()).format("MMM. YYYY")}</p>
      </header>
      <main className="font-normal text-[15px] mt-7">
        <ResumeSection title="Education">
          {JSONData.education.map((data) => (
            <ResumeEntry>
              <p className="w-10 flex-none hidden md:block">
                <strong>{data.studyType}</strong>
              </p>
              <div className="flex-grow">
                <p>
                  <strong>{data.institution}</strong>, {data.area}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {moment(data.startDate).format("MMM. YYYY")} to{" "}
                  {data.endDate === "present" ? "present" : moment(data.endDate).format("MMM. YYYY")}
                </p>
                <ul class="list-disc md:ml-8 ml-5">
                  {data.highlights.map((highlights) => (
                    <li>
                      <span className="relative -left-1">{highlights}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>
                  {moment(data.startDate).format("MMM. YYYY")} to {data.endDate === "present" ? "present" : moment(data.endDate).format("MMM. YYYY")}
                </p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Experience">
          {JSONData.workExperience.map((data) => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.name}</strong>, {data.position}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {moment(data.startDate).format("MMM. YYYY")} to{" "}
                  {data.endDate === "present" ? "present" : moment(data.endDate).format("MMM. YYYY")}
                </p>
                <ul class="list-disc md:ml-8 ml-5">
                  {data.highlights.map((highlights) => (
                    <li>
                      <span className="relative -left-1">{highlights}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>
                  {moment(data.startDate).format("MMM. YYYY")} to {data.endDate === "present" ? "present" : moment(data.endDate).format("MMM. YYYY")}
                </p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Projects">
          {JSONData.projects.map((data) => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} -{" "}
                  {data.date
                    ? data.date
                    : moment(data.startDate)
                        .format("MMM. YYYY")
                        .concat(" to ", data.endDate === "present" ? "present" : moment(data.endDate).format("MMM.YYYY"))}
                </p>
                <ul class="list-disc md:ml-8 ml-5">
                  {data.highlights.map((highlights) => (
                    <li>
                      <span className="relative -left-1">{highlights}</span>
                    </li>
                  ))}

                  <li>
                    <span className="relative -left-1">
                      Project details:{" "}
                      {data.url.includes("https://sinaatalay.com") ? (
                        <Link to={data.url.replace("https://sinaatalay.com", "")}>{data.url.replace("https://", "")}</Link>
                      ) : (
                        <OutboundLink href={data.url}>{data.url.replace("https://", "")}</OutboundLink>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>
                  {data.date
                    ? data.date
                    : moment(data.startDate)
                        .format("MMM. YYYY")
                        .concat(" to ", data.endDate === "present" ? "present" : moment(data.endDate).format("MMM.YYYY"))}
                </p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Certificates">
          {JSONData.certificates.map((data) => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p className="resumeDateAndLocationMobile">{moment(data.date).format("MMM. YYYY")}</p>
                <ul class="list-disc md:ml-8 ml-5">
                  {data.highlights.map((highlights) => (
                    <li>
                      <span className="relative -left-1">{highlights}</span>
                    </li>
                  ))}
                  <li>
                    <span className="relative -left-1">
                      Course Certificate: <OutboundLink href={data.url}>{data.url.replace("https://", "")}</OutboundLink>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="resumeDateAndLocationPC">
                <p>{data.location}</p>
                <p>{moment(data.date).format("MMM. YYYY")}</p>
              </div>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          <ResumeEntry>
            <div className="flex-grow">
              {JSONData.skills.map((data) => (
                <p>
                  <strong>{data.name}:</strong> {data.details}
                </p>
              ))}
            </div>
          </ResumeEntry>
        </ResumeSection>

        <ResumeSection title="Extracurricular Activities">
          {JSONData.extracurricular.map((data) => (
            <ResumeEntry>
              <div className="flex-grow">
                <p>
                  <strong>{data.position}</strong>, {data.name}
                </p>
                <p className="resumeDateAndLocationMobile">
                  {data.location} - {data.date}
                </p>
                <ul class="list-disc md:ml-8 ml-5">
                  {data.highlights.map((highlights) => (
                    <li>
                      <span className="relative -left-1">{highlights}</span>
                    </li>
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
