import * as React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import { useState } from "react"
import { navigate } from "gatsby";
import { ExpandMore, NavigateNext } from "@material-ui/icons"

interface SubMenuProps {
  elem: { key: string; value: { key: string; value: string }[] }
  slug?: string
}

export default function SubMenu({elem, slug}: SubMenuProps) {
  const [subMenuToggle, setSubMenuToggle] = useState(!!slug && elem.key === slug.split('/')[2])
  return (
    <>
      <ListItem
        button
        className={subMenuToggle ? 'selectedSubMenu': ''}
        onClick={() => setSubMenuToggle(!subMenuToggle)}
      >
        <ListItemText primary={elem.key} />
        {subMenuToggle ? <ExpandMore /> : <NavigateNext />}
      </ListItem>
      <Collapse
        in={subMenuToggle}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding style={{paddingLeft: '30px'}}>
          {elem.value.map(e => (
            <ListItem button key={e.key}>
              <ListItemText
                primary={e.key}
                className={!!slug && e.key === slug.split('/')[3] ? 'selectedSubMenu': ''}
                onClick={()=>navigate(e.value)}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
