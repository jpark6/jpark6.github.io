import * as React from 'react'
// @ts-ignore
import Layout from '../components/layout'
import Seo from '../components/seo'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import Utterance from '../components/utterance'

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
    }
  }
}
export default function PostLayout({path, data}: PostLayoutProps) {
  deckDeckGoHighlightElement();
  return (
    <Layout slug={data.mdx.frontmatter.slug}>
      <Seo title={data.mdx.frontmatter.title} lang="ko"/>
      <article>
        <h3>{data.mdx.frontmatter.title}</h3>
        <time>Date: {data.mdx.frontmatter.date}</time>
        <br />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
      <Utterance repo='jpark6/jpark6.github.io' theme='github-light' />
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
    }
  }
`