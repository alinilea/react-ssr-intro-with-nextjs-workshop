import React from 'react';
import Head from 'next/head';

// Components
import Paragraph from '../src/components/Paragraph';

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
      </Head>

      <p>This is <strong>Contact page</strong></p>

      <Paragraph />

      { /*language=CSS*/ }
      <style jsx>{`
        p {
         color: #00f;
        }
      `}</style>
    </div>
  );
}

export default Contact;
