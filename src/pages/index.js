import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/Postitem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem />
  </Layout>
)

export default IndexPage
