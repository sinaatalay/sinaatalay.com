import React from "react"

export default function ResumeSection({ children }) {
  return (
    <li className="mt-1 first:mt-0">
      <span className="relative -left-1">{children}</span>
    </li>
  )
}
