import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/custom.scss";
import {
  HomePage,
  ProjectsPage,
  ProductsPage,
  AboutPage,
  ProjectDetailsPage,
  ProductDetailsPage,
  Help,
} from "./components/Pages";
import { IssuesContextWrapper } from "./components/IssuesContextWrapper";
import { EvaluationsContextWrapper } from "./components/EvaluationsContextWrapper";

const ISSUES_ENDPOINT =
  "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=10000";

const EVALUATIONS_ENDPOINT =
  "https://api.knack.com/v1/pages/scene_162/views/view_311/records";

const EVALS_APP_ID = "595d00ebd315cc4cb98daff4";

function App() {
  return (
    <IssuesContextWrapper url={ISSUES_ENDPOINT}>
      <EvaluationsContextWrapper
        appId={EVALS_APP_ID}
        url={EVALUATIONS_ENDPOINT}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <Route exact path="/projects/:issue_number">
              <ProjectDetailsPage />
            </Route>
            <Route exact path="/products/:issue_number">
              <ProductDetailsPage />
            </Route>
          </Switch>
        </Router>
      </EvaluationsContextWrapper>
    </IssuesContextWrapper>
  );
}

export default App;
