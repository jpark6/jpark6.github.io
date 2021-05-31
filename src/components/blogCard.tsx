import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface BlogCardProps {
  node:{
    id: string
    body: string
    frontmatter: {
      title: string
      slug: string
      date: string
      thumbnail: string
    }
    html: string
    excerpt: string
  }
}

/**
 * mdx/md 파일 card 형태로 화면에 출력
 * @param {node} - mdx/md 파일 정보
 * @constructor
 */
export default function BlogCard({ node }: BlogCardProps){

 /**
   * card 클릭시 해당 게시글로 이동함.
   * @param link
   */
  const goPost = (link: string) => {
    navigate(link);
  }

  return (
    <Card onClick={() => goPost(node.frontmatter.slug)}>
      <CardHeader
        avatar={
          <Avatar aria-label="node">
            {node.frontmatter.title.substr(0,1)}
          </Avatar>
        }
        title={node.frontmatter.title}
        subheader={node.frontmatter.date}
      />
      <CardMedia
        component="img"
        image={node.frontmatter.thumbnail}
        alt={node.frontmatter.title}
        title={node.frontmatter.title}
      />
      <CardContent>
        {node.excerpt}
      </CardContent>
    </Card>
  )
}