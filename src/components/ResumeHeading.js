import React from "react"

export default function ResumeHeading({ children }) {
  return (
    <div>
      <h2 className="text-xl mb-1 font-bold">{children}</h2>
      <div className="w-full border-t-[2px] border-neutral-300"></div>
    </div>
  )
}
