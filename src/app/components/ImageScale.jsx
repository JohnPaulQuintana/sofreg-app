import React from 'react';

const ImageScale = () => {
  return (
    <div className="in-box mb-15">
      <div className="img-scale">
        <div className="image" data-overlay-dark="4">
          <div className="img">
            <img
              id="grow"
              src="assets/imgs/GDHEADER.jpg"
              data-speed="0.2"
              data-lag="0"
              alt="background"
            />
            {/* <a
              href="#"
              className="vid vid-circle d-flex align-items-center justify-content-center"
            >
              <span className="icon fz-50 ti-control-play"></span>
            </a> */}
            <div className='vid vid-circle flex flex-col gap-12 p-6 w-full laptop:w-[60%] rounded-md items-center justify-center'>
              <h1 className='text-4xl tablet:text-7xl font-bold'>Let’s create a measurable impact on your business.</h1>
              <a href="#" className="border p-2 rounded-md text-xl tablet:text-4xl font-bold">
                Design a Quote <span className="icon ti-arrow-top-right text-xl tablet:text-3xl"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScale;
