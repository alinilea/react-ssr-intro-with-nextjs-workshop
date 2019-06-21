import React from 'react';
import Paragraph from '../src/components/Paragraph';

function Contact() {
  return (
    <div>
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
