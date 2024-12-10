import React from "react";

const Loader = () => {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading flex flex-col tablet:flex-row items-center gap-2 text-4xl">
        <div className="load-text">
          <span>S</span>
          <span>O</span>
          <span>F</span>
          <span>R</span>
          <span>E</span>
          <span>G</span>
        </div>
        <div className="load-text">
          <span>S</span>
          <span>O</span>
          <span>L</span>
          <span>U</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
          <span>S</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
