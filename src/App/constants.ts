import { createBrowserHistory } from "history";
import { Locale } from "../I18n/Locale" 
export const HISTORY = createBrowserHistory();

// path prefixing will be handled by React Router's baseName prop if necessary
export enum APP_ROUTE {
  HOME = "/",
  ABOUT = "/about",
  TEAM = "/team",
  IMPRINT = "/imprint",
  PERSONS = "/persons",
  SEARCH = "/search",
  SOURCES = "/sources",
  PERSON = "/person/:id",
  DATA_PROTECTION ="/dataprotection"
}

export enum WP_PAGE_IDS {
  HOME = 8,
  ABOUT = 43,
  IMPRINT = 37,
  MEMBERS = 60,
  DATA_PROTECTION = 3
}

export const WP_ENDPOINT = "https://nampi.icar-us.eu/wp-json/wp/v2";

export const withLang = (isoLang: Locale.De | Locale.En, route: APP_ROUTE) => `/${isoLang}/${route}`;
export const withDynLang = (route: APP_ROUTE) => `/:lang/${route}`;