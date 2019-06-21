import React from 'react';
import Paragraph from '../src/components/Paragraph';

function Home() {
  return (
    <div>
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
