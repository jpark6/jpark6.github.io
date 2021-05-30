import * as React from 'react'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import MainMenu from './mainMenu'
import { graphql, Link, useStaticQuery } from "gatsby"
import { useState } from "react"
import { IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

interface SideBarProps {
  slug?: string
}

export default function SideBar({slug}: SideBarProps){
  const isMobile = (typeof window !== "undefined" && window.innerWidth < 500)
  const [open, setOpen] = useState(!isMobile)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const data = useStaticQuery(graphql`
    query slugQuery {
      site{
        siteMetadata {
          title
        }
      }
      allMdx(
        sort: {order: ASC, fields: [
          frontmatter___mainOrder,
          frontmatter___subOrder,
          frontmatter___postOrder,
          frontmatter___date
        ]}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const dir_arr: {
    key: string,
    value: {
      key: string,
      value: {
        key: string,
        value: string
      }[]
    }[]
  }[] = []

  interface EdgeProps {
    node: {
      frontmatter: {
        slug: string
      }
    }
  }

  // const [menuToggle, setMenuToggle] = useState(true)
  /**
   * path 경로 obj로 변환
   * /etc/test/hello1    =>    {key:etc, value:[{key:test, value:[{key:hello1 value:/etc/test/hello1`} ,
   * /etc/test/hello2                                            {key:hello2, value:/etc/test/hello2}]}] ... }
   * /osx/util/alfred
   */
  data.allMdx.edges.forEach(
    (edge: EdgeProps) => {
      const slug_arr = edge.node.frontmatter.slug.split('/');
      let dir_idx = dir_arr.findIndex(e=> e.key === slug_arr[1]);
      if(dir_idx === -1) {
        const depth3_obj = {key: slug_arr[3], value: edge.node.frontmatter.slug};
        const depth2_obj = {key: slug_arr[2], value: [depth3_obj,]};
        const depth1_obj = {key: slug_arr[1], value: [depth2_obj,]}
        dir_arr.push(depth1_obj)
      } else {
        let dir2_idx = dir_arr[dir_idx].value.findIndex(e=>e.key === slug_arr[2]);
        if(dir2_idx === -1) {
          const depth3_obj = {key: slug_arr[3], value: edge.node.frontmatter.slug};
          const depth2_obj = {key: slug_arr[2], value: [depth3_obj]};
          dir_arr[dir_idx].value.push(depth2_obj);
        } else {
          const depth3_obj = {key: slug_arr[3], value: edge.node.frontmatter.slug};
          dir_arr[dir_idx].value[dir2_idx].value.push(depth3_obj);
        }
      }
    });

  return (
    open ? (
    <div
      className="sidebar"
      >
      <header>
        <Link to="/"><h2 className="sidebar-title">{data.site.siteMetadata.title}</h2></Link>

        <IconButton
          aria-label="close drawer"
          onClick={handleDrawerClose}
          className="hideSideBarBtn"
        >
          <NavigateBeforeIcon />
        </IconButton>
      </header>
      <List>
      { dir_arr.map((e) => ( <MainMenu key={e.key} elem={e} slug={slug} /> ))}
      </List>
      <Divider />
    </div>
    ) : (
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className="showSideBarBtn"
      >
        <MenuIcon />
      </IconButton>
    )
  )
}