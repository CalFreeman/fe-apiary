import Head from "next/head";
import React from "react";
import '../styles/globals.css'

import Layout from "../components/common/Layout";
//import "styles.css";

const MyApp = ({ Component, pageProps }:{Component:any, pageProps:any}) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </>
);

export default MyApp
