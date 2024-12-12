import React from 'react';

const WorkHeader = () => {
  return (
    <header
      className="page-header bg-img section-padding"
      style={{ backgroundImage: 'url(assets/imgs/services/SERVICES.jpg)' }}
      data-overlay-dark="9"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 className='text-7xl font-bold'>Service Portfolio</h1>
          <div className="mt-15">
            <a href="#" className='text-2xl'>Home</a>
            <span className="padding-rl-20 text-2xl">|</span>
            <span className="main-color text-2xl">Portfolio</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
