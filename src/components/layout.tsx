import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./sideBar";
import TitleBar from "./titleBar";
import { useEffect, useState } from "react"

interface layoutProps {
  children: React.ReactNode
}

export default function Layout({children}: layoutProps) {
  const [open, setOpen] = useState(window.innerWidth > 500);
  const [drawerWidth, setDrawerWidth] = useState(240);
  const useStyle = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const classes = useStyle();

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const changeDrawerWidth = (width: number) => setDrawerWidth(width)

  const handleResize = () => {
    if(window.innerWidth <= 500){
      changeDrawerWidth(window.innerWidth)
    } else {
      changeDrawerWidth(320)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { // cleanup
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar open={open} onHandleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />
      <Sidebar open={open} onHandleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >{children}
      </main>
    </div>
  )
}
