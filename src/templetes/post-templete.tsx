import * as React from 'react'
// @ts-ignore
import Layout from '../components/layout'
import Seo from '../components/seo'
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Utterance from '../components/utterance'

interface postLayoutProps {
  path: string
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        slug: string
      }
      body: string
    }
  }
}

export default function PostLayout({path, data}: postLayoutProps) {
  return (
    <Layout slug={data.mdx.frontmatter.slug}>
      <Seo title={data.mdx.frontmatter.title} lang='ko'></Seo>
      <article>
        <time>Date: {data.mdx.frontmatter.date}</time>
        <br />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
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
    }
  }
`