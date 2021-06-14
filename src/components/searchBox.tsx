import * as React from 'react'
import { goPost, formatDate } from "../script/common"

interface SearchBoxProps {
  filteredPosts: { 
    node: { 
      id: string
      frontmatter: {
        title: string
        slug: string
        date: string
        thumbnail: string
      }
      html: string
      excerpt: string
    }
  }[]
  query: string
}

export default function SearchBox({filteredPosts, query}: SearchBoxProps) {
  const hasSearchResults = filteredPosts && query !== ""
  const posts = hasSearchResults ? filteredPosts : [];
  return (
    posts.length > 0 ?
    <div className="searchBox">
      {
        posts &&
        posts.map(({ node }) => {
          const slug = node.frontmatter.slug
          const title = node.frontmatter.title
          const date = node.frontmatter.date
          const excerpt = node.excerpt

          return (
            <div key={slug} className="searchArticle">
              <h2 className="searchTitle" onClick={()=>goPost(slug)}>{title}</h2>
              <p className="searchDate">{formatDate(date)}</p>
              <div className="searchContext">
                {excerpt}
              </div>
            </div>
          )
        })
      }
    </div>
    : 
    <></>
  )
}