import React from 'react';

const AvailOverlay = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  console.log(data)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[99999] flex justify-center items-center zoomin">
      <form className="bg-[#1e1b1b] bg-opacity-65 rounded-sm shadow-lg w-96 tablet:w-[60%]" id="multiStepForm">
        {/* Header */}
        <div className="px-6 py-4 text-center flex justify-between items-center">
          <span></span>
          <span className="text-xl tablet:text-4xl font-bold text-white">Finalize Your Quote</span>
          <span className="font-bold text-xl text-red-500 hover:cursor-pointer hover:text-red-700 modal-close" onClick={onClose}>
            <i className="fa-solid fa-x"></i>
          </span>
        </div>

        {/* Body */}
        <div className="px-6 py-4 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-4 items-stretch justify-center max-h-[80vh] overflow-y-auto">
          {/* First Column */}
          <div className="w-full flex flex-col h-full rounded-md justify-center p-4 bg-[#212529]">
            
            <div className="pb-4 text-center">
              <span className="text-2xl tablet:text-3xl text-white font-bold">{data.category}</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-xl tablet:text-2xl font-bold text-blue-700">$</span>
              <span className="text-4xl tablet:text-5xl font-bold text-white">{data.price}</span>
              <span className="mt-2 tablet:mt-5 text-blue-700">/month</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <span className="text-white text-lg tablet:text-xl text-center">{data.package}</span>
              <span className="text-lg tablet:text-xl text-center text-blue-700">{data.plan}</span>
            </div>
            
          </div>

          {/* Second Column */}
          <div className="steps flex flex-col gap-2 justify-center w-full h-full">
            <h6 className="text-white text-xl tablet:text-2xl font-medium text-start">
              CONTACT DETAILS
            </h6>

            {/* Contact Form */}
            <div className="text-lg tablet:text-xl">
              <label htmlFor="name" className="text-white text-sm font-medium">NAME:</label>
              <input type="text" name="name" className="w-full h-10 text-lg text-white font-bold border border-white p-2 text-center bg-transparent" required />
            </div>
            <div className="text-lg tablet:text-xl">
              <label htmlFor="email" className="text-white text-sm font-medium">EMAIL:</label>
              <input type="text" name="email" className="w-full h-10 text-lg text-white font-bold border border-white p-2 text-center bg-transparent" required />
            </div>
            <div className="text-lg tablet:text-xl">
              <label htmlFor="country" className="text-white text-sm font-medium">COUNTRY:</label>
              <input type="text" name="country" className="w-full h-10 text-lg text-white font-bold border border-white p-2 text-center bg-transparent" required />
            </div>
            <div className="text-lg tablet:text-xl">
              <label htmlFor="mobile_number" className="text-white text-sm font-medium">MOBILE NUMBER/WHATSAPP NO:</label>
              <input type="text" name="mobile_number" className="w-full h-10 text-lg tablet:text-xl text-white font-bold border border-white p-2 text-center bg-transparent" required />
            </div>

            <div className="w-full">
              <button type="button" className="flex gap-2 items-center justify-center w-full bg-blue-700 text-white py-2 px-4 rounded-tablet hover:bg-blue-500">
                <span className="text-tablet">Submit Now</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AvailOverlay;
