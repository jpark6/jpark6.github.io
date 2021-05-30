import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./sideBar";
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode
  slug?: string
}

export default function Layout({children, slug}: LayoutProps) {
  const [open, setOpen] = useState(true);
  const drawerWidth = 320;

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <div>
      <CssBaseline />
      <Sidebar slug={slug} />
      <main>
        {children}
      </main>
    </div>
  )
}
