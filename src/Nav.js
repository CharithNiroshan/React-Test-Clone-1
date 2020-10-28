import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleshow(true) : handleshow(false);
    });
    return (
      () => {
        window.removeEventListener("scroll");
      },
      []
    );
  });

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        width="100px"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Avatar"
        width="30px"
      />
    </div>
  );
}

export default Nav;
