import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blogCard";
import { Grid } from "@material-ui/core";
import Spinner from "../components/spinner";
import Seo from "../components/seo"

interface IndexPageProps {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string,
            body: string,
            frontmatter: {
              title: string,
              slug: string,
              date: string,
              thumbnail: string,
            },
            html: string,
            excerpt: string,
          }
        }
      ],
      totalCount: number
    }
  }
}
/**
 * @constructor
 */
export default function IndexPage({ data }: IndexPageProps){

  return (
    <>
      <Spinner />
      <Layout>
        <Seo title="jPark's Blog" lang="ko"/>
        <div className="indexContainer">
          <h4>{data.allMdx.totalCount} Posts</h4>
          <div className="cardContainer">
            <Grid container spacing={1}>
              {data.allMdx.edges.map(( { node} ) => (
                <Grid item key={node.id} xs={12} sm={12} md={6} lg={4} xl={4}>
                  <BlogCard node={node}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Layout>
    </>
  )
}
export const query = graphql`
query {
  allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          slug
          title
          date
          thumbnail
        }
        body
        excerpt
      }
    }
  }
}
`