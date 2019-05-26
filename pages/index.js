import React, { Fragment } from 'react';
import Head from 'next/head';

function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Workshop-React SSR intro with Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
      </Head>

      <h2>Welcome to React SSR intro with Next.js</h2>
    </Fragment>
  );
}

export default IndexPage;
