import React from "react";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <div className="header">
      <p id="sendit">SendIT</p>
      <NavBar home={props.home} login={props.login} signup={props.signup} logout={props.logout} />
    </div>
  );
}

export default Header;
