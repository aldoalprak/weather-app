import App from 'next/app';
import Head from 'next/head';
import {Provider} from 'react-redux';
import React from 'react';
import store from '../redux/store';
import withRedux from 'next-redux-wrapper';
import withReactRouter from '../next/with-react-router';
class WeatherApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps: pageProps};
  }
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <Head>
          <title>NextWeather</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps}/>
        </Provider>
      </>
    )
  }
}

const makeStore = () => store;

export default withReactRouter(withRedux(makeStore)(WeatherApp));