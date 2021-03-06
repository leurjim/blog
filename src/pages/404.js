import * as React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title={`404 page`} />
      <div>El gran vacío. Esta página no existe.</div>
    </Layout>
  )
}

export default NotFoundPage
