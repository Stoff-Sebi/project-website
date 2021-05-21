import { Redirect, Route, Router, Switch } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";
import { Person } from "./pages/Person";
import { Persons } from "./pages/Persons";
import { HISTORY, APP_ROUTE, withDynLang } from "./constants";
import { Locale } from "../I18n/Locale";
import { TranslationProvider } from "I18n/TranslationContext";

export const App = () => {
  return (
    <Router history={HISTORY}>
      <Route path="/:lang">
        {({ match, location }) => {
          // add lang to url when not stated
          // prepend iso language statement
          if (!location.pathname.includes(`/${match?.params.lang}/`)) {
            return <Redirect to={`/en${location.pathname}`}></Redirect>;
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
                <Route path="*" component={NoMatch} />
              </Switch>
            </TranslationProvider>
          );
        }}
      </Route>
    </Router>
  );
};
