import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About me page" />
    <h1>Fullstack react developer</h1>
    <p>from India</p>
    <hr />
    <Link to="/blog">Read My Blog</Link>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ut
      quidem architecto maxime illo vero. Nostrum aspernatur laborum, neque
      ullam, nulla odio magnam velit rem quo, quam quasi suscipit porro!
    </p>
    <hr />
    <Link to="/">Go back to HomePage</Link>
  </Layout>
)

export default SecondPage
