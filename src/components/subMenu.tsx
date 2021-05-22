import * as React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import Collapse from "@material-ui/core/Collapse"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import SendIcon from "@material-ui/icons/Send"
import { useState } from "react"
import { navigate } from "gatsby";

interface subMenuProps {
  elem: { key: string; value: { key: string; value: string }[] }
  isFirst: boolean
}

export default function SubMenu({ elem, isFirst }: subMenuProps) {
  const [subMenuToggle, setSubMenuToggle] = useState(isFirst)
  /**
   * 메뉴 클릭시 해당 게시글로 이동함.
   * @param link
   */
   const goPost = (link: string) => {
    navigate(link);
  }
  return (
    <>
      <ListItem button key={elem.key} onClick={() => setSubMenuToggle(!subMenuToggle)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={elem.key} />
        {subMenuToggle ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse
        in={subMenuToggle}
        key={elem.key + "collapse"}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {elem.value.map(e => (
            <ListItem button key={e.key}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={e.key} onClick={()=>navigate(e.value)}/>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
