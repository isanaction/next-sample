import { NextPage } from "next";
import { AppProps } from "next/app";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
