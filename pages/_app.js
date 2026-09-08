import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { IssuesContextWrapper } from "../components/wrappers/IssuesContextWrapper";
import CustomHead from "./CustomHead";
import "../styles/custom.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const didCorrectRoute = useRef(false);

  useEffect(() => {
    /**
     * See https://github.com/cityofaustin/atd-data-tech/issues/24354
     *
     * Upgrading to Next v15 (current: v15.5.3) broke our dynamic page
     * routing. This effect fixes it by manually checking if there is
     * a mismatch between the current window.location and the
     * page that the next/router thinks we're on. If so, we manually
     * push the next/router to the correct path.
     */
    if (didCorrectRoute.current) return;

    const path = window.location.pathname;
    // If we're not on the homepage but router thinks we are
    if (path !== "/" && router.pathname === "/") {
      didCorrectRoute.current = true;
      // Push to the actual path
      router.push(path + window.location.search + window.location.hash);
    } else {
      didCorrectRoute.current = true;
    }
  }, [router]);

  return (
    <IssuesContextWrapper>
      <CustomHead />
      <Component {...pageProps} />
    </IssuesContextWrapper>
  );
}

export default App;
