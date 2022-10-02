import "../styles/globals.css";
import "../../node_modules/@mayurarx/ooredoo-design-system/dist/tailwind.css";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
