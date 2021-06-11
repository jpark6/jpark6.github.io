import * as React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { navigate } from "gatsby";

interface SubMenuProps {
  elem: { key: string; value: string;}
  slug?: string
}

export default function SubMenu({elem, slug}: SubMenuProps) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={elem.key}
          className={!!slug && elem.key === slug.split('/')[2] ? 'selectedSubMenu': ''}
          onClick={()=>navigate(elem.value)}
        />
      </ListItem>
    </>
  )
}
