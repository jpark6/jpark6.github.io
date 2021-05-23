import * as React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import { useState } from "react"
import { navigate } from "gatsby";
import { ListAlt, NavigateNext } from "@material-ui/icons"

interface subMenuProps {
  elem: { key: string; value: { key: string; value: string }[] }
  slug?: string
}

export default function SubMenu({ elem, slug}: subMenuProps) {
  const [subMenuToggle, setSubMenuToggle] = useState(!!slug && elem.key === slug.split('/')[2])
  return (
    <>
      <ListItem
        button
        key={elem.key}
        onClick={() => setSubMenuToggle(!subMenuToggle)}
      >
        <ListItemIcon style={{ minWidth: '30px'}}>
          <ListAlt />
        </ListItemIcon>
        <ListItemText primary={elem.key} />
        {subMenuToggle ? <ExpandMore /> : <NavigateNext />}
      </ListItem>
      <Collapse
        in={subMenuToggle}
        key={elem.key + "collapse"}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding style={{paddingLeft: '30px'}}>
          {elem.value.map(e => (
            <ListItem button key={e.key}>
              <ListItemText primary={e.key} onClick={()=>navigate(e.value)}/>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
