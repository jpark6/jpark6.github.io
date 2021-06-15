import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from "./sideBar"
import SearchBar from "./searchBar"
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
  
  const scrollHandler = () => {
    const toc = document.getElementsByTagName("aside")
    if(!toc || toc.length < 0 || !toc[0] ||  !toc[0].style || toc[0].offsetWidth === 0) {
      return;
    }
    
    const anchor_holder = document.getElementsByClassName("anchor-header")
    if(!anchor_holder || anchor_holder.length < 0) {
      return;
    }
    let selected_anchor = null
    for(let a of Array.from(anchor_holder)){
      if(a.getBoundingClientRect().top > -30) {
        console.log(a.getAttribute("href") ,".top: ", a.getBoundingClientRect().top)
        console.log("body.top: ", document.body.scrollTop)
        selected_anchor = a.getAttribute("href")
        break
      }
    }
    if(!selected_anchor) {
      selected_anchor = Array.from(anchor_holder)[anchor_holder.length -1].getAttribute("href")
    }
    document.querySelectorAll("aside a.selected").forEach(a => {
      a.classList.remove("selected");
    })
    if(selected_anchor) {
      const toc_selected = document.querySelector("aside a[href='"+ decodeURIComponent(selected_anchor) +"']")
      toc_selected && toc_selected.classList.add("selected")
    }
  }
  
  document.body.addEventListener("scroll", scrollHandler)

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
        onLoad={scrollHandler}
      >
        <SearchBar />
        {children}
      </main>
    </div>
  )
}
