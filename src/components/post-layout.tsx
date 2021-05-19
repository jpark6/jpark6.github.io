import * as React from 'react'
// @ts-ignore
import Helmet from 'react-helmet'
import Layout from './layout'
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

interface postLayoutProps {
  path: string,
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

export default function PostLayout({ path, data}: postLayoutProps) {
  const blog = data.mdx;
  return (
    <Layout>
      <Helmet>
        <title>{blog.frontmatter.title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{blog.frontmatter.title}</h1>
          <time>Date: {blog.frontmatter.date}</time>
        </header>
        <MDXRenderer>{blog.body}</MDXRenderer>
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