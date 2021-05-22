import * as React from 'react'
// @ts-ignore
import Helmet from 'react-helmet'
import Layout from './layout'
import Seo from './seo'
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

interface postLayoutProps {
  path: string
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
      }
      body: string
    }
  }
}

export default function PostLayout({path, data}: postLayoutProps) {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} lang='ko'></Seo>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <article>
        <time>Date: {data.mdx.frontmatter.date}</time>
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
      }
    }
  }
`