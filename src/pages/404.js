import React from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <header>
        <h1>404</h1>
      </header>
      <main>
        <p>Sorry, that page doesn't exist.</p>
      </main>
    </Layout>
  )
}