import * as React from "react"
import { useState } from "react"
import { List } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import SubMenu from "./subMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronDown} from "@fortawesome/free-solid-svg-icons"

interface MainMenuProps {
  elem: {key:string, value: {key:string, value:string}[]}
  slug?: string
}

export default function MainMenu({elem, slug}: MainMenuProps) {
  const [menuToggle, setMenuToggle] = useState(!!slug && elem.key === slug.split('/')[1]);

  return (
    <>
      <ListItem
        button
        className={menuToggle ? 'selectedMenu': ''}
        onClick={() => {
          setMenuToggle(!menuToggle)
        }}
      >
        <ListItemText primary={elem.key} />
        {menuToggle ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
      </ListItem>
      <Collapse
        in={menuToggle}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding style={{paddingLeft: '35px'}}>
          {elem.value.map((e) => {
            return (
              <SubMenu key={e.key} elem={e} slug={slug}/>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}
