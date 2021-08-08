import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import logo from "./YT-logo.svg"

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon/>
        <img className="header_logo" src={logo} alt="YT"/>
      </div>
      <div className="header_input">
        <input type="text"/>
        <SearchIcon className="header_inputButton"/>
      </div>
      
      <div className="header_icons">
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Header
