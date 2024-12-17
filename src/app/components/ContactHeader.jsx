import React from 'react';

const ContactHeader = () => {
  return (
    <header
      className="page-header-cerv bg-img section-padding"
      style={{ backgroundImage: "url('assets/imgs/header/2.jpg')" }}
      data-overlay-dark="4"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 className="fz-100 font-semibold">Contact Us.</h1>
          <div className="mt-15">
            <a href="home-main.html" className='text-xl'>Home</a>
            <span className="padding-rl-20 text-xl">|</span>
            <span className="main-color text-xl">Contact</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
