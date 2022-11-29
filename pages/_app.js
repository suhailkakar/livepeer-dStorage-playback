import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

function MyApp({ Component, pageProps }) {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: null,
    }),
  });

  return (
    <LivepeerConfig client={livepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
