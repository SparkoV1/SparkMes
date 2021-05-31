import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png"
        alt=""
      />
    </header>
  );
};

export default Header;
