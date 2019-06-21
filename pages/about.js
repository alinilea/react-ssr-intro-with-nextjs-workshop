import React from 'react';
import Head from 'next/head';

// Components
import Paragraph from '../src/components/Paragraph';

function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <p>This is <strong>About page</strong></p>

      <Paragraph />

      { /*language=CSS*/ }
      <style jsx global>{`
        /*global scope style refers only to the page where it is placed*/
        p {
          color: #0f0;
        }
      `}</style>
    </div>
  );
}

export default About;
