// import '@/styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react";
// import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
