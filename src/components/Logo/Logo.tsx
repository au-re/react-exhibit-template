import "./Logo.css";

import React from "react";

/** The Exhibit logo with some animations. Demoing usage with css files */

interface ILogo {
  size: string;
}

const Logo = (props: ILogo) =>
  (<div className="Exhibit__Logo__Box Box--Outer">
    <div className="Exhibit__Logo__Box Box--Inner" />
    <div className="Exhibit__Logo__Circle Circle--Top" />
  </div>);

export default Logo;
