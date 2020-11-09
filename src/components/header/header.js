import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {

  return (
    <div className="header">
      <Link to="/">
        <IconButton className="header__button">
          <img
            src="https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/s320x320/73176622_986537251705862_2163519973551505408_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_ohc=hHGacG8rP_MAX91KYiF&oh=383038a8aea6200cf581032c1aeae380&oe=5FD0F62F"
            alt="om makana profile"
            className="header__profilePhoto"
          />
        </IconButton>
      </Link>

      <Link to="/youtube">
        <IconButton className="header__button">
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Link>

      <Link to="/camera">
        <IconButton className="header__button">
          <PhotoCameraIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
