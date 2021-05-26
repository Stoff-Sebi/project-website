import React from "react";
import zimLogo from "./zimgraz_logo.png";
import gamsLogo from "./gamslogo_schwarz.gif";
import license from "./license.png"

export const LogoBar: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://informationsmodellierung.uni-graz.at/" target="blank" className="w-20"><img src={zimLogo}></img></a>
      <a href="https://gams.uni-graz.at/" target="_blank" className="w-20"><img src={gamsLogo}></img></a>
      <a className="w-20">~Icarus~</a>
      <a className="w-20">~ÖAW~</a>
      <a className="w-20">~Uni Wien~</a>
      <a className="w-20">~Go Digital?~</a>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.de" className="w-20" target="_blank"><img src={license}></img></a>
    </div>
  );
};
