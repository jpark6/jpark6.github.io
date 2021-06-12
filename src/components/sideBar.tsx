import * as React from 'react'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import MainMenu from './mainMenu'
import { graphql, Link, useStaticQuery } from "gatsby"
import { IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons"

interface SideBarProps {
  open: boolean
  slug?: string
  handleDrawerOpen: () => void
  handleDrawerClose: () => void
}

export default function SideBar({open, slug, handleDrawerOpen, handleDrawerClose}: SideBarProps){
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
      value: string
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
   * path 경로 object로 변환
   * /etc/hello1    =>    { key:etc, value:[{key:hello1 value:/etc/test/hello1`} ,
   * /etc/hello2                            {key:hello2, value:/etc/test/hello2}], 
   * /mac/alfred            key:mac, value:[{key:alfref, value:/mac/alfred}] ... }
   */
  data.allMdx.edges.forEach(
    (edge: EdgeProps) => {
      const slug_arr = edge.node.frontmatter.slug.split('/')
      let dir_idx = dir_arr.findIndex(e => e.key === slug_arr[1])
      const depth2_obj = {key: slug_arr[2], value: edge.node.frontmatter.slug}
      if(dir_idx === -1) {
        const depth1_obj = {key: slug_arr[1], value: [depth2_obj,]}
        dir_arr.push(depth1_obj)
      } else {
        dir_arr[dir_idx].value.push(depth2_obj);
      }
    })

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
          <FontAwesomeIcon icon={faAngleLeft} />
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