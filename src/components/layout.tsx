import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./sideBar";
import TitleBar from "./titleBar";
import { useEffect, useState } from "react"
import Aside from './aside';

interface layoutProps {
  children: React.ReactNode
  slug?: string
}

export default function Layout({children, slug}: layoutProps) {
  const [open, setOpen] = useState(typeof window == 'object' && window.innerWidth > 500);
  const [drawerWidth, setDrawerWidth] = useState(320);
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
  }))

  const classes = useStyle();

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const changeDrawerWidth = (width: number) => setDrawerWidth(width)

  const initDrawer = () => { window.innerWidth > 500 && handleDrawerOpen() }
  const handleResize = () => {
    window.innerWidth <= 500 ? changeDrawerWidth(window.innerWidth) : changeDrawerWidth(320)
  }

  useEffect(() => {
    if(typeof window !== 'object') return
    initDrawer()
    window.addEventListener('resize', handleResize)
    return () => { // cleanup
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar open={open} onHandleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />
      <Sidebar open={open} onHandleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth} slug={slug} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >{children}
      </main>
      <Aside />
    </div>
  )
}
