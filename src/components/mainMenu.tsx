import * as React from "react"
import { List } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import Collapse from "@material-ui/core/Collapse"
import Settings from "@material-ui/icons/Settings"
import { useState } from "react"
import SubMenu from "./subMenu"
import { Code, FiberManualRecord, LaptopMac, NavigateNext, Stars, ViewList } from "@material-ui/icons"

interface mainMenuProps {
  elem: {key:string, value: {key:string, value:{key: string, value: string}[]}[]}
  slug?: string
}

export default function MainMenu({elem, slug}: mainMenuProps) {
  const [menuToggle, setMenuToggle] = useState(!!slug && elem.key === slug.split('/')[1]);

  /**
   * 메인아이콘 리턴 💔 하드코딩 💔
   * @returns 메인 아이콘
   */
  const getMainIcon = (menuName: string):JSX.Element => {
    let icon = <FiberManualRecord />
    switch(menuName) {
      case "mac": icon = <LaptopMac />; break
      case "coding": icon = <Stars />; break
      case "develop": icon = <Code />; break
      case "etc": icon = <ViewList />; break
    }
    return icon
  }
  return (
    <>
      <ListItem
        button
        key={elem.key}
        onClick={() => {
          setMenuToggle(!menuToggle)
        }}
      >
        <ListItemIcon style={{minWidth:'30px'}}>
          {getMainIcon(elem.key)}
        </ListItemIcon>
        <ListItemText primary={elem.key} />
        {menuToggle ? <ExpandMore /> : <NavigateNext />}
      </ListItem>
      <Collapse
        in={menuToggle}
        key={elem.key + "collapse"}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding style={{paddingLeft: '35px'}}>
          {elem.value.map((e, i) => {
            return (
              <SubMenu elem={e} slug={slug}/>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}
