import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1609383645129-c777c3a5c7e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-XgN0i2rmPFtSabi9iyRZ9LfetqCTiefzeSPGS=s83-c-mo"
        />
        <h2>Ahmed Raza</h2>
        <h4>Frontend Web Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">65</p>
          {/* <p>Grow Your Network</p> */}
        </div>
        <div className="sidebar__stat">
          <p>Who Viewed You </p>
          <p className="sidebar__statNumber">20</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">200</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("react-native")}
        {recentItem("developer")}
        {recentItem("javascript")}
      </div>
    </div>
  );
}

export default Sidebar;
