import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./sideBar";
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode
  slug?: string
}

export default function Layout({children, slug}: LayoutProps) {
  const isMobile = (typeof window !== "undefined" && window.innerWidth < 500)
  const [open, setOpen] = useState(!isMobile)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <div>
      <CssBaseline />
      <Sidebar
        open={open}
        slug={slug}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main
        className={ open ? "sidebarOpen" : "sidebarClose"}
      >
        {children}
      </main>
    </div>
  )
}
