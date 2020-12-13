import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="read blog post" />
    <h1>Read my Blog</h1>
    <p>
      Welcome to page 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptas modi sint rerum dicta dolore, quasi quod. Porro labore dolorum
      dolores temporibus neque eveniet, tempora ab sunt amet accusantium in
      autem.
    </p>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nihil
      reprehenderit tempore magnam eligendi quo expedita, rem est numquam minus
      eius necessitatibus, animi ipsam. Obcaecati, iusto corporis. Soluta, quasi
      sunt?{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/about">About me</Link>
  </Layout>
)

export default SecondPage
