import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import ResumeEntry from "../components/ResumeEntry"
import ResumeSection from "../components/ResumeSection"
import ResumeHighlight from "../components/ResumeHighlight"
import ExternalLink from "../components/ExternalLink"
import JSONData from "../contents/resume/resume.json"
import moment from "moment"

function DateDataToText(StartDate, EndDate, Date) {
  var Regex = /[a-z]/
  if (Date) {
    if (Regex.test(Date)) {
      return Date
    } else {
      return moment(Date).format("MMM. YYYY")
    }
  } else {
    if (EndDate === "present") {
      return moment(StartDate).format("MMM. YYYY") + " to present"
    } else {
      return moment(StartDate).format("MMM. YYYY") + " to " + moment(EndDate).format("MMM. YYYY")
    }
  }
}

function UrlToLink(Url) {
  if (Url.includes("https://sinaatalay.com")) {
    return <Link to={Url.replace("https://sinaatalay.com", "")}>{Url.replace("https://", "")}</Link>
  } else {
    return <ExternalLink href={Url}>{Url.replace("https://", "")}</ExternalLink>
  }
}

export default function Resume() {
  return (
    <Layout Title="Resume">
      <header className="relative my-8">
        <p className="absolute text-xs text-right top-0 -mt-7 w-full italic text-neutral-700">
          Last updated in {moment(1675553324742).format("MMM. YYYY")}
        </p>
        <h1 className="font-semibold text-3xl text-center text-primary-800">{JSONData.basics.name}</h1>
        <h2 className="font-light text-lg mt-3 text-center text-primary-800">{JSONData.basics.label}</h2>
      </header>
      <main className="font-normal text-base md:text-sm">
        <ResumeSection title="Education">
          {JSONData.education.map((data) => (
            <ResumeEntry
              StudyType={data.studyType ? data.studyType : " "}
              TitleBoldPart={data.institution}
              TitleNormalPart={data.area}
              Date={DateDataToText(data.startDate, data.endDate, data.date)}
              Location={data.location}
            >
              <ResumeHighlight>GPA: {data.gpa}</ResumeHighlight>
              {data.highlights.map((highlights) => (
                <ResumeHighlight>{highlights}</ResumeHighlight>
              ))}
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Experience">
          {JSONData.workExperience.map((data) => (
            <ResumeEntry
              TitleBoldPart={data.company}
              TitleNormalPart={data.position}
              Date={DateDataToText(data.startDate, data.endDate, data.date)}
              Location={data.location}
            >
              {data.highlights.map((highlights) => (
                <ResumeHighlight>{highlights}</ResumeHighlight>
              ))}
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Projects">
          {JSONData.projects.map((data) => (
            <ResumeEntry TitleBoldPart={data.name} Date={DateDataToText(data.startDate, data.endDate, data.date)} Location={data.location}>
              {data.highlights.map((highlights) => (
                <ResumeHighlight>{highlights}</ResumeHighlight>
              ))}
              <ResumeHighlight>Projects details: {UrlToLink(data.url)}</ResumeHighlight>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Certificates">
          {JSONData.certificates.map((data) => (
            <ResumeEntry TitleBoldPart={data.name} Date={DateDataToText(data.startDate, data.endDate, data.date)} Location={data.location}>
              {data.highlights.map((highlights) => (
                <ResumeHighlight>{highlights}</ResumeHighlight>
              ))}
              <ResumeHighlight>Course Certificate: {UrlToLink(data.url)}</ResumeHighlight>
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

        <ResumeSection title="Test Scores">
          <ResumeEntry>
            <div className="flex-grow">
              {JSONData.testScores.map((data) => (
                <p>
                  <strong>{data.name}:</strong> {data.details}
                </p>
              ))}
            </div>
          </ResumeEntry>
        </ResumeSection>

        <ResumeSection title="Extracurricular Activities">
          {JSONData.extracurricularActivities.map((data) => (
            <ResumeEntry
              TitleBoldPart={data.company}
              TitleNormalPart={data.position}
              Date={DateDataToText(data.startDate, data.endDate, data.date)}
              Location={data.location}
            >
              {data.highlights.map((highlights) => (
                <ResumeHighlight>{highlights}</ResumeHighlight>
              ))}
            </ResumeEntry>
          ))}
        </ResumeSection>
      </main>
    </Layout>
  )
}
