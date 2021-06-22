import * as React from 'react'
import Sidebar from "./sideBar"
import SearchBar from "./searchBar"
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode
  slug?: string
}

export default function Layout({children, slug}: LayoutProps) {
  const isMobile = (typeof window !== "undefined" && window.innerWidth < 650)
  const [open, setOpen] = useState(!isMobile)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  
  const scrollHandler = () => {
    const toc = document.getElementsByTagName("aside")
    if(!toc || toc.length < 0 || !toc[0] ||  !toc[0].style || toc[0].offsetWidth === 0) {
      return;
    }
    
    const anchor_holder = document.getElementsByClassName("anchor-header")
    if(!anchor_holder || anchor_holder.length <= 0) {
      return;
    }
    let selected_anchor = null
    const anchor_holder_arr = Array.from(anchor_holder)
    for(let a of anchor_holder_arr){
      if(a.getBoundingClientRect().top > -30) {
        selected_anchor = a.getAttribute("href")
        break
      }
    }
    if(!selected_anchor) {
      selected_anchor = anchor_holder_arr[anchor_holder_arr.length -1].getAttribute("href")
    }
    document.querySelectorAll("aside a.selected").forEach(a => {
      a.classList.remove("selected");
    })
    if(selected_anchor) {
      const toc_selected = document.querySelector("aside a[href='"+ decodeURIComponent(selected_anchor) +"']")
      toc_selected && toc_selected.classList.add("selected")
    }
  }

  typeof document !== "undefined" && document.body.addEventListener("scroll", scrollHandler)

  return (
    <main>
      <Sidebar
        open={open}
        slug={slug}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <section
        className={ open ? "sidebarOpen" : "sidebarClose"}
      >
        <SearchBar />
        <div className="content">
          {children}
        </div>
      </section>
    </main>
  )
}
