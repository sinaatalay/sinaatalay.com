import React from "react"

export default function ResumeSection({ title, children }) {
  return (
    <>
      <div className="flex">
        <h2 className="text-primary-800 text-xl font-semibold leading-[14px] whitespace-nowrap">{title}</h2>
        <div className="w-full border-b-[2px] border-primary-800 ml-2"></div>
      </div>
      <div className="my-4 mx-2 md:mx-4">{children}</div>
    </>
  )
}
