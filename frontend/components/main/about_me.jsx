import React from 'react';

const AboutMe = () => {

  return(
    <div id="me-container">
      <h6 className='me-web'>Website Created By: </h6>
      <h6 className='me-name'>Michael Ruan</h6>
      <h6 className='me-clone'>Korra is inspired by the website, Quora.</h6>
      <h6 className="me-disclaimer">
      Korra is a non-profit website created for coding experience.</h6>
      <h6 className='me-reach'>You can find out more about me at:</h6>
      <a href="https://github.com/mi-ruan/"
      className="fab fa-github">Github</a>
      <a href="https://www.linkedin.com/in/michael-ruan-3051a994/"
      className="fab fa-linkedin">Linkedin</a>
    </div>
  );
};

export default AboutMe;
