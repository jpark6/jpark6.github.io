import React from "react";

interface TitleBarProps {
  open: boolean
  onHandleDrawerOpen: any
  drawerWidth: number
}
export default function TitleBar({open, onHandleDrawerOpen, drawerWidth}: TitleBarProps){
  return (
    <div>"title"</div>
  )
}
