import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import GlobalStyle from "../components/GlobalStyles";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>맘 가이드</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
export default MyApp;
