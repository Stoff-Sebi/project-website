import { Link } from "App/components/Link";
import { APP_ROUTE } from "App/constants";
import React from "react";
import {Locale} from "../../../../I18n/Locale";

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = ({lang}) => {
  return (
    <footer className="w-full bottom-0 h-10 hidden md:block md:fixed p-2 bg-gray-100 text-sm">
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
          <Link to={`/${lang}${APP_ROUTE.IMPRINT}`} className="mr-5">Imprint</Link>
          <Link to={`/${lang}${APP_ROUTE.TEAM}`} className="mr-5">Contact</Link>
          <Link to={`/${lang}${APP_ROUTE.DATA_PROTECTION}`} className="mr-5">Data protection</Link>
        </div>
    </footer>
  );
};

export default Footer;
