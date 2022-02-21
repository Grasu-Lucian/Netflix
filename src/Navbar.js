import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
export default function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
  });
  return (
    <div className={`${classes.navbar} ${handleShow && classes.black1}`}>
      <img
        className={classes.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className={classes.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Neflix Logo"
      />
    </div>
  );
}
