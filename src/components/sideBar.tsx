import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {graphql, Link, useStaticQuery} from "gatsby";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

interface sideBarProps {
  open: boolean
  onHandleDrawerClose: ()=>void
}

export default function SideBar({open, onHandleDrawerClose}: sideBarProps){
  const data = useStaticQuery(graphql`
    query slugQuery {
      allMdx {
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

  const dir_arr:{key: string, value: {key: string, value: {key: string, value: string}[]}[]}[] = []

  interface edgeProps {
    node: {
      frontmatter: {
        slug: string
      }
    }
  }
  /**
   * path 경로 Map으로 변환
   * /blog/[0002]etc/test/hello1    =>    Map([0002]etc:[test:[hello1, hello2]],
   * /blog/[0002]etc/test/hello2              [0001]osx:[util:[alfred, ]],
   * /blog/[0001]osx/util/alfred              [0000]develop:[gatsby:[1.info, 2.install, 3.deploy]]
   * /blog/[0000]develop/gatsby/1.info
   * /blog/[0000]develop/gatsby/2.install
   * /blog/[0000]develop/gatsby/3.deploy
   */
  data.allMdx.edges.forEach(
    (edge: edgeProps , idx: number) => {
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
  const classes = useStyles();
  const theme = useTheme();
  
  // console.log('dirarr:',dir_arr);
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
          { dir_arr.map(e => (
            <ListItem button key={e.key}>
              <ListItemText primary={e.key} />
              <ul key={e.key}>
              { e.value.map(e1 => (
                  <li key={e1.key}>
                    <span>{e1.key}</span>
                    <ul key={e1.key} />
                    <ul>
                      { e1.value.map(e2 => (
                        <li key={e2.value}>
                          <Link to={e2.value}>{e2.key}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
              ))}
              </ul>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  )
}