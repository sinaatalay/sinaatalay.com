import React from "react"

function IfItIsEducation(StudyType) {
  if (StudyType) {
    return (
      <p className="w-10 flex-none hidden md:block">
        <strong>{StudyType}</strong>
      </p>
    )
  } else {
    return
  }
}

export default function ResumeEntry({ children, TitleBoldPart, TitleNormalPart, Date, Location, StudyType }) {
  if (Date) {
    return (
      <div className="flex flex-row mt-2">
        {IfItIsEducation(StudyType)}
        <div className="flex-grow">
          <p>
            <strong>{TitleBoldPart}</strong>
            {TitleNormalPart ? ", " + TitleNormalPart : ""}
          </p>
          <p className="resumeDateAndLocationMobile">
            {Location} - {Date}
          </p>
          <ul class="list-disc md:ml-8 ml-5 resumeHighlights">{children}</ul>
        </div>
        <div className="resumeDateAndLocationPC">
          <p>{Location}</p>
          <p>{Date}</p>
        </div>
      </div>
    )
  } else {
    return <div className="flex flex-row mt-2">{children}</div>
  }
}
