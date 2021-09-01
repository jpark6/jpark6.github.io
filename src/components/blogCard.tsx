import * as React from 'react';
import {formatDate} from '../script/common';
import { Link } from 'gatsby';
import { Card } from 'antd';
const { Meta } = Card;

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
    <Link to={node.frontmatter.slug}> 
      <Card
        hoverable
        bordered={false}
        cover={
          <img
            src={node.frontmatter.thumbnail}
            alt={node.frontmatter.title}
            style={{width:'100%', height:'270px', marginBottom:0, borderBottom: '1px solid #f0f0f0', objectFit: 'cover'}}
          />
        }
        style={{backgroundColor: 'white', border: '1px solid #ddd'}}
      >
        <Card.Meta
          title={node.frontmatter.title}
          description={formatDate(node.frontmatter.date)}
        />
      </Card>
    </Link>
  )
}