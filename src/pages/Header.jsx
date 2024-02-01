import React, { useContext } from "react";
import "./header.css";
import userImg from "../images/user_img.jpg";
import { AppContext } from "../App";

function Header({ toggleHandle }) {
  const { library, bag } = useContext(AppContext);

  return (
    <header>
      <a href="#" className="menu" onClick={toggleHandle}>
        <i class="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i class="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i class="bi bi-bag-heart-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User Img" />
          </a>
          <div className="user-details">
            <span>It&apos;Nyeinn</span>
            <a href="https://github.com/Its-Nyein">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
