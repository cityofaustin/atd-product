import { IssuesContextWrapper } from "../components/wrappers/IssuesContextWrapper";
import { EvaluationsContextWrapper } from "../components/wrappers/EvaluationsContextWrapper";
import CustomHead from "./CustomHead";
import "../styles/custom.scss";

const ISSUES_ENDPOINT =
  "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=100000";

const EVALUATIONS_ENDPOINT =
  "https://api.knack.com/v1/pages/scene_162/views/view_311/records";

const EVALS_APP_ID = "595d00ebd315cc4cb98daff4";

function App({ Component, pageProps }) {
  return (
    <IssuesContextWrapper url={ISSUES_ENDPOINT}>
      <EvaluationsContextWrapper
        appId={EVALS_APP_ID}
        url={EVALUATIONS_ENDPOINT}
      >
        <CustomHead />
        <Component {...pageProps} />
      </EvaluationsContextWrapper>
    </IssuesContextWrapper>
  );
}

export default App;
