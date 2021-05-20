import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { NampiLogo } from "../../NampiLogo";
import { NampiLangSelect } from "../../NampiLangSelect";
import { APP_ROUTES } from "../../../constants";

export const Navbar = () => (
  <nav className="relative flex items-center justify-between flex-wrap bg-gray-400 p-3 text-white">
    <div className="space-x-3 text-white flex items-center">
      <Link to={APP_ROUTES.HOME} className="font-semibold text-2xl">
        <NampiLogo className="h-10 bg-white p-1 rounded" />
      </Link>
      <Link to={APP_ROUTES.PERSONS}>
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Persons"
        />
      </Link>
      <Link to="/persons">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Events"
        />
      </Link>
      <Link to="/persons">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Search"
        />
      </Link>
      <Link to="/persons">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Sources"
        />
      </Link>
      <Link to={APP_ROUTES.ABOUT}>
        <FormattedMessage
          description="About page"
          defaultMessage="About"
        />
      </Link>
    </div>
    <div className="">
        <NampiLangSelect className="text-black"/>
    </div>
  </nav>
);
