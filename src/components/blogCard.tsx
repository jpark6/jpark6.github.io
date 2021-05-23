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

interface blogCardProps {
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
  }
}

/**
 * mdx/md 파일 card 형태로 화면에 출력
 * @param {node} - mdx/md 파일 정보
 * @constructor
 */
export default function BlogCard({ node }: blogCardProps){
  const blog = node;

 /**
   * card 클릭시 해당 게시글로 이동함.
   * @param link
   */
  const goPost = (link: string) => {
    navigate(link);
  }

  return (
    <Card onClick={() => goPost(blog.frontmatter.slug)}>
      <CardHeader
        avatar={
          <Avatar aria-label="blog">
            {blog.frontmatter.title.substr(0,1)}
          </Avatar>
        }
        title={blog.frontmatter.title}
        subheader={blog.frontmatter.date}
      />
      <CardMedia
        component="img"
        image={blog.frontmatter.thumbnail}
        alt={blog.frontmatter.title}
        title={blog.frontmatter.title}
      />
      <CardContent>
        <MDXRenderer>{blog.body}</MDXRenderer>
      </CardContent>
    </Card>
  )
}