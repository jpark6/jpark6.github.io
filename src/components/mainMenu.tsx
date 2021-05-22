import * as React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import Collapse from "@material-ui/core/Collapse"
import Settings from "@material-ui/icons/Settings"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"
import { useState } from "react"
import SubMenu from "./subMenu"

interface mainMenuProps {
  elem: {key:string, value: {key:string, value:{key: string, value: string}[]}[]}
  isFirst: boolean
}

export default function MainMenu({elem, isFirst}: mainMenuProps) {
  const [menuToggle, setMenuToggle] = useState(isFirst);
  return (
    <>
      <ListItem
        button
        key={elem.key}
        onClick={() => {
          setMenuToggle(!menuToggle)
        }}
      >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary={elem.key} />
        {menuToggle ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse
        in={menuToggle}
        key={elem.key + "collapse"}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {elem.value.map((e, i) => {
            return (
              <SubMenu elem={e} isFirst={i===0}/>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}
