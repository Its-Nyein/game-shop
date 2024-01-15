import React, { useState } from "react";
import "./slideMenu.css";
import NavListItem from "./NavListItem";
import NavListData from "../data/NavListData";

function SlideMenu() {
  const [navData, setNavData] = useState(NavListData);

  return (
    <div className="slideMenu">
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item.id} item={item} />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a href="#" className="meta">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#" className="twitter-x">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#" className="youtube">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SlideMenu;
