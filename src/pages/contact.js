import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout title="Contact">
      <header>
        <h1 className="h1Pages">Contact</h1>
        <p className="pPages">Feel free to contact me!</p>
      </header>
      <main>
        <form className="mt-8" action="https://getform.io/f/156b4f25-b9bb-4e5c-88f1-20c4b106a9d2" method="POST">
          <div className="mb-6 w-full">
            <label className="pPages mb-2" for="name">
              Your Name
              <input
                className="appearance-none block w-full bg-neutral-200 text-neutral-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-50"
                name="name"
                id="name"
                type="name"
                autoComplete="name"
                placeholder="John Doe"
              />
            </label>
          </div>

          <div className="mb-6 w-full">
            <label className="pPages mb-2" for="email">
              Your E-mail
              <input
                className="appearance-none block w-full bg-neutral-200 text-neutral-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-50"
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                placeholder="john@doe.com"
              />
            </label>
          </div>
          <div className="mb-6 w-full">
            <label className="pPages" for="message">
              Message
              <textarea
                className="no-resize appearance-none block w-full bg-neutral-200 text-neutral-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-50 h-48 resize-none"
                name="message"
                id="message"
              ></textarea>
            </label>
          </div>
          <div className="md:flex md:items-center md:w-1/3">
            <button
              className="shadow bg-primary-500 hover:bg-primary-900 transition duration-200 ease-out focus:shadow-outline focus:outline-none text-secondary-500 hover:text-secondary-400 font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </main>
    </Layout>
  )
}
