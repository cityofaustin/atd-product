import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/custom.scss";
import HomeView from "./views/homeView/HomeView";
import AboutView from "./views/aboutView/AboutView";
import ProjectsView from "./views/projectsView/ProjectsView";
import ProjectDetailsView from "./views/projectDetailsView/ProjectDetailsView";
import ProductsView from "./views/productsView/ProductsView";
import ProductDetailsView from "./views/productDetailsView/ProductDetailsView";
import { IssuesContextWrapper } from "./shared/IssuesContextWrapper";
import { EvaluationsContextWrapper } from "./shared/EvaluationsContextWrapper";

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
              <HomeView />
            </Route>
            <Route exact path="/about">
              <AboutView />
            </Route>
            <Route exact path="/projects">
              <ProjectsView />
            </Route>
            <Route exact path="/products">
              <ProductsView />
            </Route>
            <Route exact path="/projects/:issue_number">
              <ProjectDetailsView />
            </Route>
            <Route exact path="/products/:issue_number">
              <ProductDetailsView />
            </Route>
          </Switch>
        </Router>
      </EvaluationsContextWrapper>
    </IssuesContextWrapper>
  );
}

export default App;
