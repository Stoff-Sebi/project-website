import { createBrowserHistory } from "history";
export const HISTORY = createBrowserHistory();

// path prefixing will be handled by React Router's baseName prop if necessary
export const APP_ROUTES = {
  HOME:"/",
  ABOUT: "/about",
  TEAM: "/team",
  IMPRINT: "/imprint",
  PERSONS:"/persons",
  SEARCH:"/search",
  SOURCES: "/sources",
  PERSON: "/person/:id"
}
