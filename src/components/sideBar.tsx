import * as React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import { Menu, Button } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

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
   * /Util/Util            key:Util, value:[{key:alfref, value:/Util/Util}] ... }
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
    }
  );
  
  // 활성 서브메뉴 
  const selectMenu = !!slug && slug.includes("/") ? slug.split("/")[1] : "";
  

  return (
    open ? (
    <nav className="sidebar">
      <div className="sidebarDiv">
        <header
          style={{height: '50px', backgroundColor: '#1bc5be'}}
        >
          <Link to="/">
            <h2 className="sidebar-title">{data.site.siteMetadata.title}</h2>
          </Link>
          <Button
            className="hideSideBarBtn"
            onClick={handleDrawerClose}
          >
            <CloseOutlined />
          </Button>
        </header>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectMenu]}
          defaultOpenKeys={[selectMenu]}
          style={{borderRight: '1px solid #fafafa'}}
        >
        { 
          dir_arr.map(
            (e) => (
              <Menu.SubMenu key={e.key} title={e.key}>
                {
                  e.value.map((e1) => {
                    return (
                      <Menu.Item key={e1.key}>
                        <Link to={e1.value}>
                          {e1.key}
                        </Link>
                      </Menu.Item>
                    )
                  })
                }
              </Menu.SubMenu>
            )
          )
        }
        </Menu>
      </div>
    </nav>
    ) : (
      <Button
        className="showSideBarBtn"
        onClick={handleDrawerOpen}
      >
        <MenuOutlined />
      </Button>
    )
  )
}