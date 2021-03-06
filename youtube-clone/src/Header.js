import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import logo from "./YT-logo.svg"
import { Link } from "react-router-dom"

function Header() {

  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon/>

        {/* <Link to="/">
          <img className="header_logo" src="./YT-logo.svg" alt="" />
        </Link> */}

        <img className="header_logo" src={logo} alt="YT"/>
      </div>
      <div className="header_input">
        <input onChange={ (e) => setInputSearch(e.target.value) } value={ inputSearch } placeholder="Search" type="text"/>

        <Link to={ `/search/${inputSearch}` }>
          <SearchIcon className="header_inputButton"/>
        </Link>
        
      </div>
      
      <div className="header_icons">
        <VideoCallIcon className="vc"/>
        <AppsIcon className="ai"/>
        <NotificationsIcon className="ni"/>
        <Avatar className="av"/>
      </div>
    </div>
  )
}

export default Header
