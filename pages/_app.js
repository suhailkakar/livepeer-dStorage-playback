import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

function MyApp({ Component, pageProps }) {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "0a2ca3b9-3154-4754-a310-633063161c8b",
    }),
  });

  return (
    <LivepeerConfig client={livepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
