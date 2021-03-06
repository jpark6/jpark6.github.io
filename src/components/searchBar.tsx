import * as React from 'react'
import SearchBox from './searchBox'
import { SearchOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";
import { graphql, useStaticQuery } from "gatsby"
import { Dispatch, SetStateAction, useState } from "react"

export default function searchBar() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date
              thumbnail
            }
            excerpt(pruneLength: 5000)
          }
        }
      }
    }
  `)

  const [query, setQuery] = useState("")
  const [filteredPosts, setFilteredPost]:[{node: {id: string, frontmatter: {title: string, slug: string, date: string, thumbnail: string}, html: string, excerpt: string}}[],Dispatch<SetStateAction<[]>>] = useState([])
  const openGitRepository = () => {
    window.open("https://github.com/jpark6", "_github")
  }
  const mailToMe = () => {
    location.href = "mailto:qkstjr09@gmail.com"
  }
  const openTIL = () => {
    window.open("https://jpark6-til.netlify.app", "_til")
  }
  const handleSearchInput = (event:React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value.toLowerCase()
    const posts = data.allMdx.edges || []
    
    interface PostProps {
      node: {
        body: string
        excerpt: string
        frontmatter: {
          title: string
          date: string
        }
      }
    }
    const filterPost = posts.filter((post:PostProps) => {
      const title = post.node.frontmatter.title
      // const excerpt = post.node.excerpt
      return (
        (title && title.toLowerCase().includes(query))
        /* 본문내용 찾기  
        ||
        (excerpt && excerpt.toLowerCase().includes(query))
        */
      )
    })
    setQuery(query)
    setFilteredPost(filterPost)
  }
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="게시글 검색"
        onChange={handleSearchInput}
        value={query}
      />
      <SearchOutlined style={{fontSize: '16px'}} />
      <button type="button">
        <GithubOutlined />
      </button>
      <button type="button">
        <MailOutlined />
      </button>
      <button
        type="button"
        onClick={openTIL}
        className="til"
      >
        TIL
      </button>
      <SearchBox filteredPosts={filteredPosts} query={query} setQuery={setQuery}/>
    </div>
  )
}