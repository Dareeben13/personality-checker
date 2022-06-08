import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QuestionProivder } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuestionProivder>
      <Component {...pageProps} />
    </QuestionProivder>
  );
}

export default MyApp;
