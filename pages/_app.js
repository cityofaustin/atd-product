import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IssuesContextWrapper } from "../components/wrappers/IssuesContextWrapper";
import { EvaluationsContextWrapper } from "../components/wrappers/EvaluationsContextWrapper";
import CustomHead from "./CustomHead";
import { EVALUATIONS_ENDPOINT, EVALS_APP_ID } from "../components/settings";
import "../styles/custom.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isCorrectRoute, setIsCorrectRoute] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;

    // If we're not on the homepage but router thinks we are
    if (path !== "/" && router.pathname === "/") {
      console.log("Route mismatch detected, forcing correction...");

      // Push to the actual path
      router
        .push(path + window.location.search + window.location.hash)
        .then(() => {
          setIsCorrectRoute(true);
        });
    } else {
      setIsCorrectRoute(true);
    }
  }, []);

  // Don't render the wrong component
  if (
    !isCorrectRoute &&
    window.location.pathname !== "/" &&
    router.pathname === "/"
  ) {
    return <div>Loading correct page...</div>;
  }
  return (
    <IssuesContextWrapper>
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
