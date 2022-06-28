import { IssuesContextWrapper } from "../components/wrappers/IssuesContextWrapper";
import { EvaluationsContextWrapper } from "../components/wrappers/EvaluationsContextWrapper";
import CustomHead from "./CustomHead";
import {
  ISSUES_ENDPOINT,
  EVALUATIONS_ENDPOINT,
  EVALS_APP_ID,
} from "../components/settings";
import "../styles/custom.scss";

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
