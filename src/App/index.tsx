import { Redirect, Route, Router, Switch } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";
import { Person } from "./pages/Person";
import { Persons } from "./pages/Persons";
import { HISTORY, APP_ROUTE, withDynLang } from "./constants";
import { DEFAULT_LOCALE } from "../I18n/constants";
import { TranslationProvider } from "I18n/TranslationContext";
import { Locale } from "I18n/Locale";
import Imprint from "./pages/Imprint";
import Team from "./pages/Team";

export const App = () => {
  return (
    <Router history={HISTORY}>
      <Route path="/:lang">
        {({ match, location }) => {
          // redirect to url with lang stmt.
          // prepend iso language statement from constants
          const langStmt: string = Object.keys(Locale).join("|")  // join Locale enum
          const langRegex = new RegExp("^\/(" + langStmt + ")\/?", "gi");
          if (!location.pathname.match(langRegex)) {
            return <Redirect to={`/${DEFAULT_LOCALE}${location.pathname}`}></Redirect>;
          }

          return (
            <TranslationProvider locale={match?.params.lang as any}>
              <Switch>
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.HOME}`}
                  component={Home}
                />
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.ABOUT}`}
                  component={About}
                />
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.PERSONS}`}
                  component={Persons}
                />
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.PERSON}`}
                  component={Person}
                />
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.IMPRINT}`}
                  component={Imprint}
                />
                <Route
                  exact
                  path={`/:lang${APP_ROUTE.TEAM}`}
                  component={Team}
                />
                <Route path="/:lang/*" component={NoMatch} />
              </Switch>
            </TranslationProvider>
          );
        }}
      </Route>
    </Router>
  );
};
