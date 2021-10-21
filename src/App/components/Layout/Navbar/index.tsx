import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { NampiLogo } from "../../NampiLogo";
import { NampiLangSelect } from "../../NampiLangSelect";
import { APP_ROUTE } from "../../../constants";
import React from "react";

interface Props {
  lang: string
}

export const Navbar: React.FC<Props> = (props) => {
  
  const [dropDownOpen, setDropdownOpen] = React.useState<Boolean>(false);


  return (

  <nav className="sticky top-0 relative flex items-center justify-between flex-wrap bg-gray-400 p-3 text-white text-base">
    <div className="space-x-3 text-white flex items-center">
      <NavLink to={`/${props.lang}${APP_ROUTE.HOME}`} className="font-semibold text-2xl">
        <NampiLogo className="h-10 bg-white p-1 rounded" />
      </NavLink>

      <a style={{borderBottom:"10px sold lightblue"}} target="_blank" href={APP_ROUTE.DATA_PAGE}>
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Data-page"
        />
      </a>

      <NavLink activeClassName="text-black" to={`/${props.lang}${APP_ROUTE.PERSONS}`}>
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Sources"
        />
      </NavLink>



      <NavLink activeClassName="text-black" to={`/${props.lang}${APP_ROUTE.PERSONS}`}>
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Methodology"
        />
      </NavLink>

      <NavLink to={`/${props.lang}${APP_ROUTE.ABOUT}`} activeClassName="text-black">
        <FormattedMessage
          description="About page"
          defaultMessage="About"
        />
      </NavLink>

      <NavLink to={`/${props.lang}${APP_ROUTE.ABOUT}`} activeClassName="text-black">
        <FormattedMessage
          description="About page"
          defaultMessage="Team"
        />
      </NavLink>

      <div className="relative inline-block text-left">
  <div>
    <button onClick={() => setDropdownOpen(!dropDownOpen)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Sources
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div style={{display: dropDownOpen ? "initial" : "none"}} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
          Sign out
        </button>
      </form>
    </div>
  </div>
</div>


      {/*
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
      */}




    </div>
    <div className="">
        <NampiLangSelect className="text-black"/>
    </div>
  </nav>
)};
