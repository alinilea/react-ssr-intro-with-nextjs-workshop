import React, { Fragment } from 'react';
import Head from 'next/head';

function Index() {
  return (
    <Fragment>
      <Head>
        <title>Workshop-React SSR intro with Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
      </Head>

      <h2>Welcome to React SSR intro with Next</h2>

      <style jsx>{`
        h2 {
          color: #222;
        }
      `}</style>
      <style jsx global>{`
        h2 {
          font-style: italic;
          letter-spacing: 1.5px;
        }
      `}</style>
    </Fragment>
  );
}

export default Index;
