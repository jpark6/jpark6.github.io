import * as React from 'react'
// @ts-ignore
import Layout from '../components/layout'
import Seo from '../components/seo'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import Utterances from '../components/utterances'
import Toc from "../components/toc"
import { formatDate } from "../script/common"
import Disqus from '../components/disqus'

interface Item {
  url: string
  title: string
  items?: Item[]
}
interface PostLayoutProps {
  path: string
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        slug: string
      }
      body: string
      excerpt: string
      tableOfContents: {items: Item[] | undefined}
    }
  }
}
export default function PostLayout({path, data}: PostLayoutProps) {
  deckDeckGoHighlightElement().then(r => void(0))
  return (
    <Layout slug={data.mdx.frontmatter.slug}>
      <Seo title={data.mdx.frontmatter.title} lang="ko"/>
      <div className="contentMain">
        <article>
          <h1>{data.mdx.frontmatter.title}</h1>
          <time>Date: {formatDate(data.mdx.frontmatter.date)}</time>
          <br />
          <br />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
        {/* <Utterances repo='jpark6/jpark6.github.io' theme='github-light' /> */}
        <Disqus />
      </div>
      <Toc toc={data.mdx.tableOfContents}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        slug
      }
      excerpt(pruneLength: 250)
      tableOfContents
    }
  }
`