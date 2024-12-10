import React from "react";
// import Logo from "../../assets/imgs/logo-light.png"
const Navbar = () => {
    const menuItems = [
        "Home",
        "Services",
        "About",
        "Portfolio",
        "Team",
        "Contact",
    ];

    return (
        < nav className="desktop:px-80 navbar navbar-expand-lg nav-crev" 
            // style={{
            //     width: "100% !important",
            //     left: '0px !important',
            //     top: '0px !important',
            //     paddingLeft: "20px"
            // }}
            >
            <div className="container">
                {/* Logo */}
                <a className="logo w-[150px] desktop:w-[150px]" href="#">
                    <img src="/assets/imgs/logo-light.png" alt="logo" />
                </a>

                {/* Toggler Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                {/* Navbar Links */}
                <div
                    className="hidden laptop:block justify-content-center"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        {menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-link"
                                    href={`#${index}`}
                                    data-scroll-nav={index}
                                >
                                    <span className="rolling-text">{item}</span>
                                    {/* <span className="rolling-text">dwadwad</span> */}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sidebar Toggle */}
                <div className="topnav">
                    <div className="menu-icon cursor-pointer">
                        <span className="icon ti-align-right"></span>
                    </div>
                </div>
            </div>
        </nav >
  );
};

export default Navbar;
