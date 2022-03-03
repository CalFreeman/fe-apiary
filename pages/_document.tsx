import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="freemanbees" />
          <meta property="og:title" content="freemanbees a bee and honey business" />
          <meta
            property="og:description"
            content="freemanbees a bee and honey business"
          />
          <meta property="og:url" content="https://freemanbees.com/" />
          <link
            rel="logo"
            type="image/svg"
            sizes="192x192"
            href="/images/bee_logo.svg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;