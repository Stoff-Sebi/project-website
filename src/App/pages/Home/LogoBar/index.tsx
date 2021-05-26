import React from "react";
import zimLogo from "./zimgraz_logo.png";
import gamsLogo from "./gamslogo_schwarz.gif";
import license from "./license.png"

export const LogoBar: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <img className="w-20" src={zimLogo}></img>
      <img className="w-20" src={gamsLogo}></img>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.de" target="_blank"><img className="w-20" src={license}></img></a>
    </div>
  );
};
