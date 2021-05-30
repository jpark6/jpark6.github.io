import * as React from 'react'
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MainMenu from './mainMenu'
import {graphql, useStaticQuery} from 'gatsby'

interface SideBarProps {
  open: boolean
  onHandleDrawerClose: ()=>void
  drawerWidth: number
  slug?: string
}

export default function SideBar({open, onHandleDrawerClose, drawerWidth, slug}: SideBarProps){
  const sideBarStyle = makeStyles((theme: Theme) => ({
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const data = useStaticQuery(graphql`
    query slugQuery {
      allMdx (
        sort: {order: ASC, fields: [frontmatter___mainOrder, frontmatter___subOrder, frontmatter___postOrder, frontmatter___date]}
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

  interface edgeProps {
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
    (edge: edgeProps) => {
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
  const classes = sideBarStyle();
  const theme = useTheme();

  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onHandleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        { dir_arr.map((e) => ( <MainMenu key={e.key} elem={e} slug={slug} /> ))}
        </List>
        <Divider />
      </Drawer>
  )
}