import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

export default function ExternalLink({ children, href }) {
  return (
    <OutboundLink href={href}>
      {children}
      <FaExternalLinkAlt className="inline text-sm mb-1 ml-1" />
    </OutboundLink>
  )
}
