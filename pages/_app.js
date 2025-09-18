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
    /**
     * See https://github.com/cityofaustin/atd-data-tech/issues/24354
     *
     * Upgrading to Next v15 (current: v15.5.3) broke our dynamic page
     * routing. This effect fixes it by manually checking if there is
     * a mismatch between the current current window.location and the
     * page that the next/router thinks we're on. If so, the page
     * is router manually directed to the correct path.
     */
    if (isCorrectRoute) return;

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
  }, [router, isCorrectRoute]);

  // Don't render until we're on the correct route
  if (
    !isCorrectRoute &&
    typeof window !== "undefined" &&
    window.location.pathname !== "/" &&
    router.pathname === "/"
  ) {
    return <div>Loading...</div>;
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
