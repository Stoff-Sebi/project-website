import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 h-10 hidden md:block md:fixed p-2 bg-gray-100">
        <div className="float-left">
          <a
            href="https://www.icar-us.eu/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener"
          >
            Icarus 2021
          </a>
        </div>
        <div className="float-right flex">
          <a className="mr-5">Imprint</a>
          <a className="mr-5">Contact</a>
        </div>
    </footer>
  );
};

export default Footer;
