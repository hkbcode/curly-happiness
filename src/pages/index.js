import React from "react"
import { Link } from "gatsby"
import { Button } from 'antd'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsbyjs Starter for Firebase Hosting</h1>
   
<Button type="primary">Get started with AntDesign</Button>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <hr />
    <Link to="/about">about me</Link>
    <hr />
    <Link to="/blog">read blog</Link>
    <hr />
    <Link to="/projects">list of projects</Link>
  </Layout>
)

export default IndexPage
