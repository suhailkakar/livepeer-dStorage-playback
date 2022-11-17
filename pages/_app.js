import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

function MyApp({ Component, pageProps }) {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "2cfa4490-fc5d-40fa-bbfa-93805f664183",
    }),
  });

  return (
    <LivepeerConfig client={livepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
