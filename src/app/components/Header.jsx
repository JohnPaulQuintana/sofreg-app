import React from "react";
import { motion } from "framer-motion";
// import '/assets/css/sphere.css'
const Header = () => {

  return (
    <header className="startup-header overflow-hidden" data-scroll-index="0">
      {/* bg-gradient-to-tl from-[#1c1c1c] via-[#1c1c1c] to-[#243447] */}
      <div
        className="valign bg-img relative tablet:pt-[100px] bg-[#1E1D1D]"
      >
        <div className="animation-wrapper absolute flex items-center justify-center top-[80px]">
          <div className="sphere-animation flex justify-center items-center w-[20%] phone:w-[10%] h-[100vh]">
            <svg className="sphere w-[100%] tablet:w-[50%]" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
              <defs>
                <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
                  <stop stopColor="#373734" offset="0%" />
                  <stop stopColor="#242423" offset="50%" />
                  <stop stopColor="#0D0D0C" offset="100%" />
                </linearGradient>
              </defs>
              <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z" />
              <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z" />
              <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z" />
              <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" />
              <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z" />
              <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" />
              <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z" />
              <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z" />
              <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z" />
              <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z" />
              <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z" />
              <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z" />
              <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z" />
              <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z" />
              <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z" />
              <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" />
              <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z" />
              <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" />
              <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z" />
              <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z" />
              <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z" />
            </svg>
          </div>
        </div>
        <div
          id="hero"
          className="container flex justify-center items-center mt-24 laptop:px-32 wide:px-40"
        // style={{ paddingTop: "40px", paddingRight: "40px" }}
        >
          <div className="caption" style={{ textAlign: "center", color: "white" }}>
            <div className="lg-text fw-600" style={{ fontWeight: 600, fontSize: "2.5rem" }}>
              {/* <div className="text d-flex align-items-center">
                <span className="text-[1.2em] laptop:text-[1.5em] desktop:text-[1.8em] wide:text-[2.5em] pe-2">Discover, </span>
              </div> */}
              <div className="text text-[1em] laptop:text-[2.5em] desktop:text-[2.6em] wide:text-[3.5em]">Discover, Elevate</div>
              <div className="text text-[0.9em] laptop:text-[1.7em] desktop:text-[1.8em] wide:text-[2.5em]  text-color-primary-blue">Revolutionize</div>
            </div>
            <div className="w-full flex justify-center">
                <ul className="grid grid-cols-2 tablet:grid-cols-4 gap-4 justify-center fz-14 w-[50%]">
                  <li className="hover-this cursor-pointer">
                    <a href="https://www.facebook.com/people/Sofreg-Solutions/61567081641563/" className="hover-anim flex items-center justify-center gap-2">
                      <i className="fab fa-facebook-f  text-color-primary-blue"></i> Facebook
                    </a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="tel:+639177070531" className="hover-anim flex items-center justify-center gap-2">
                      <i className="fa-brands fa-whatsapp text-md  text-color-primary-blue"></i> Whatsapp
                    </a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://www.linkedin.com/company/sofreg-solutions/" className="hover-anim flex items-center justify-center gap-2">
                      <i className="fab fa-linkedin-in  text-color-primary-blue"></i> LinkedIn
                    </a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="mailto:sofreginfo@gmail.com" className="hover-anim flex items-center justify-center gap-2">
                      <i className="fa-regular fa-envelope  text-color-primary-blue"></i> Email
                    </a>
                  </li>
                </ul>
              </div>
          </div>

        </div>
      </div>
      <div className="main-marq lrg o-hidden mb-12 mt-24 laptop:mt-36 wide:mt-24">
        <h1 className="text-center text-xl tablet:text-2xl mb-4"><span className="text-color-primary-blue">150+</span> Projects Successfully Delivered With Many More on the Horizon!</h1>
        <div className="slide-har st1">
          <div className="box">
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Phillippines</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>United State</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Canada</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>United Kingdom</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Australia</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Germany</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Philippines</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>Canada</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>United Kingdom</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center">
                <span>United State</span>
                {/* <span className="fz-50 ml-50 stroke icon">*</span> */}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
