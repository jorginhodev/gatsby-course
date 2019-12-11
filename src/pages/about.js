import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Aboutpage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <ul>
      <li>
        <a href="/about">About (link normal)</a>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About (Gatsby Link)
        </Link>
      </li>
    </ul>
  </Layout>
)
export default Aboutpage
