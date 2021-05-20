import { Route, Router, Switch } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Layout/Navbar";
import { NoMatch } from "./pages/NoMatch";
import { Person } from "./pages/Person";
import { Persons } from "./pages/Persons";
import { HISTORY, APP_ROUTES } from "./constants";

export const App = () => {
  return (
    <Router history={HISTORY}>
      <Switch>
        <Route exact path={APP_ROUTES.HOME} component={Home} />
        <Route exact path={APP_ROUTES.ABOUT} component={About} />
        <Route exact path={APP_ROUTES.PERSONS} component={Persons} />
        <Route exact path={APP_ROUTES.PERSON} component={Person} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};
