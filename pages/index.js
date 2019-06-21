import React from 'react';
import Head from 'next/head';

// Components
import Paragraph from '../src/components/Paragraph';

function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <p>This is <strong>Home page</strong></p>

      <h2>Welcome to React SSR intro with Next.js</h2>

      <Paragraph />

      { /*language=CSS*/ }
      <style jsx>{`
        h2 {
         color: #00f;
        }
      `}</style>
      { /*language=CSS*/ }
      <style jsx global>{`
        /*global scope style refers only to the page where it is placed*/
        p {
          color: #f00;
          font-style: italic;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

export default Home;
