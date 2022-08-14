import React from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout title="404">
      <header>
        <h1 className="h1Pages">404</h1>
      </header>
      <main>
        <p className="pPages">Sorry, that page doesn't exist.</p>
      </main>
    </Layout>
  )
}
