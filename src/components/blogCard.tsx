import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@material-ui/core";
import {Link, navigate} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

interface blogCardProps {
  node:{
    id: string,
    body: string,
    frontmatter: {
      title: string,
      slug: string,
      date: string,
      thumbnail: string,
    },
    html: string
  }
}

export default function BlogCard({ node }: blogCardProps){
  const blog = node;

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