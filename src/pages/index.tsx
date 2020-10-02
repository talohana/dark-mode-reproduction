import React from "react"
import useDarkMode from "use-dark-mode"
import { Layout } from "../components/Layout"

export default function Home() {
  const { value, toggle } = useDarkMode()

  return (
    <Layout>
      <h1>Now displaying {value ? "dark" : "light"} mode!</h1>
      <div>
        Dark Mode:{" "}
        <input type="checkbox" defaultChecked={value} onChange={toggle} />
      </div>
    </Layout>
  )
}
