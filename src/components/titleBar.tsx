import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import React, {ReactElement} from "react";
import {AppBar} from "@material-ui/core";
import {Link} from "gatsby";

interface titleBarProps {
  open: boolean
  onHandleDrawerOpen: any
  useStyle: {
    appBar: any
    appBarShift: any
    menuButton: any
    hide: any
    titleBarLink: any
  }
}
export default function TitleBar({open, onHandleDrawerOpen, useStyle}: titleBarProps){
  const classes = useStyle
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onHandleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" noWrap>
          <Link className={clsx(classes.titleBarLink)} to="/">jpblog</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
