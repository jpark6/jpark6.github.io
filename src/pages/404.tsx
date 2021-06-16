import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" lang="ko" />
      <h1>게시글을 찾지 못했습니다.</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

