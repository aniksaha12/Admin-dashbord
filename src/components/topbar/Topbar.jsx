import React from 'react'
import "./topbar.css";
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <div className="topleft">
      <span className="logo">Admin</span>
      </div>
      <div className="topRight">

        <div className="topbarIconContainer">
        <NotificationsNone/>
        <span className="topIconBadge">2</span>
        </div>

        <div className="topbarIconContainer">
        <Language/>
        <span className="topIconBadge">2</span>
        </div>

        <div className="topbarIconContainer">
        <Settings/>
         </div>

        <img src="https://image.shutterstock.com/image-vector/agro-culture-logo-vector-design-260nw-1713461719.jpg" 
        alt="" className="topAvatar"/>

      </div>
    </div>
    </div>
  )
}

export default Topbar
