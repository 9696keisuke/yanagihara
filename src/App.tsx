import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Good from "./components/pages/Good";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Test from "./components/pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/page2" exact>
          <Page2 />
        </Route>
        <Route path="/good" exact>
          <Good />
        </Route>
        <Route path="/test" exact>
          <Test />
        </Route>
        <Route>
          <Page1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
