import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>List of Projects</h1>
    <b>Great way to build faster projects with github</b>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore
      blanditiis aut doloremque distinctio voluptas, ullam sed illo deserunt.
      Quo dolorum deserunt corporis cum blanditiis! Adipisci itaque minus
      exercitationem suscipit.
    </p>

    <ul>
      <li>grammer hero</li>
      <li>fastuo - a social media</li>
      <li>watchlearn - a Online teching site</li>
      <li>myshoop - a online ecommerce store for small businesses</li>
    </ul>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <hr />
    <Link to="/about">about me</Link>
    <hr />
    <Link to="/blog">read blog</Link>
  </Layout>
)

export default IndexPage
