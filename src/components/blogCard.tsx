import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import {goPost, formatDate} from "../script/common"

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
  return (
    <Card onClick={() => goPost(node.frontmatter.slug)}>
      <CardHeader
        avatar={
          <Avatar aria-label="node">
            {node.frontmatter.title.substr(0,1)}
          </Avatar>
        }
        title={node.frontmatter.title}
        subheader={formatDate(node.frontmatter.date)}
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