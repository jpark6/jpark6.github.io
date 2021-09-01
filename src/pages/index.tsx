import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blogCard";
import { Row, Col } from "antd";
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

const colStyle= {
  padding: "8px 0"
};

/**
 * @constructor
 */
export default function IndexPage({ data }: IndexPageProps){

  return (
    <>
      <Spinner />
      <Layout>
        <Seo title="" lang="ko"/>
        <div className="indexContainer">
          <h4>{data.allMdx.totalCount} Posts</h4>
          <div className="cardContainer">
            <Row>
              {data.allMdx.edges.map(( { node} ) => (
                <Col
                  key={node.id}
                  className="gutter-row"
                  xs={24} sm={24} md={12} lg={8} xl={8}
                  style={{padding: '0 4px 8px'}}
                >
                  <BlogCard node={node}/>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  )
}
export const query = graphql`
query {
  allMdx(
    sort: {order: [DESC, DESC, DESC], fields: [frontmatter___date, frontmatter___mainOrder, frontmatter___postOrder]}
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