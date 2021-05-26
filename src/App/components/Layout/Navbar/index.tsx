import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { NampiLogo } from "../../NampiLogo";
import { NampiLangSelect } from "../../NampiLangSelect";
import { APP_ROUTE } from "../../../constants";

interface Props {
  lang: string
}

export const Navbar: React.FC<Props> = (props) => (

  <nav className="sticky top-0 relative flex items-center justify-between flex-wrap bg-gray-400 p-3 text-white text-base">
    <div className="space-x-3 text-white flex items-center">
      <NavLink to={`/${props.lang}${APP_ROUTE.HOME}`} className="font-semibold text-2xl">
        <NampiLogo className="h-10 bg-white p-1 rounded" />
      </NavLink>
      <NavLink activeClassName="text-black" to={`/${props.lang}${APP_ROUTE.PERSONS}`}>
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Persons"
        />
      </NavLink>
      <NavLink to="/persons" activeClassName="text-black">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Events"
        />
      </NavLink>
      <NavLink to="/persons" activeClassName="text-black">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Search"
        />
      </NavLink>
      <NavLink to="/persons" activeClassName="text-black">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Sources"
        />
      </NavLink>
      <NavLink to={`/${props.lang}${APP_ROUTE.ABOUT}`} activeClassName="text-black">
        <FormattedMessage
          description="About page"
          defaultMessage="About"
        />
      </NavLink>
    </div>
    <div className="">
        <NampiLangSelect className="text-black"/>
    </div>
  </nav>
);
