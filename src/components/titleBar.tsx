import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import React, {ReactElement} from "react";
import {AppBar} from "@material-ui/core";
import {Link} from "gatsby";
import { makeStyles } from "@material-ui/core/styles"

interface TitleBarProps {
  open: boolean
  onHandleDrawerOpen: any
  drawerWidth: number
}
export default function TitleBar({open, onHandleDrawerOpen, drawerWidth}: TitleBarProps){
  const titleBarStyle =  makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    titleBarLink: {
      color: '#FFF',
      textDecoration: 'none',
      hover: {
        color: 'red'
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
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
  }))
  const classes = titleBarStyle()
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onHandleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" noWrap>
          <Link className={clsx(classes.titleBarLink)} to="/">jPark's Blog</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
