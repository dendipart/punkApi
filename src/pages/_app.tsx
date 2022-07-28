import { Provider as ProviderRedux } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/global.css";

import FilterProvider from "../providers/FilterProvider";
import { store } from "../store";
import Header from "../layout/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProviderRedux store={store}>
        <FilterProvider>
          <Header></Header>
          <Component {...pageProps} />
        </FilterProvider>
      </ProviderRedux>
    </>
  );
}
