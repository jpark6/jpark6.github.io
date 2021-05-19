import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Spinner from "../components/spinner";
import BlogCard from "../components/blogCard";
import { Grid } from "@material-ui/core";

interface indexPageProps {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string,
            body: string,
            frontmatter: {
              title: string,
              path: string,
              date: string,
              thumbnail: string,
            },
            html: string
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
export default function IndexPage({ data }: indexPageProps){
  return (
    <>
      <Spinner/>
      <Layout>
        <div className={'main-container'}>
          <h4>{data.allMdx.totalCount} Posts</h4>
          <div className="cardContainer">
            <Grid container spacing={1}>
              {data.allMdx.edges.map(( { node} ) => (
                <Grid item key={node.id} xs={12} sm={6} md={4} lg={4} xl={3}>
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
    sort: {order: ASC, fields: [frontmatter___mainOrder, frontmatter___subOrder, frontmatter___postOrder]}
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
      }
    }
  }
}
`