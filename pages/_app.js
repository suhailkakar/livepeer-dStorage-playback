import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

function MyApp({ Component, pageProps }) {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "bd0f94af-0978-4ae9-b86d-c98747758986",
    }),
  });

  return (
    <LivepeerConfig client={livepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
