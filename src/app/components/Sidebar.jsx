import React from "react";
import Logo from "../../assets/imgs/logo-light.png"
const Sidebar = () => {
    const menuItems = [
        "Home",
        "Services",
        "About",
        "Portfolio",
        "Team",
        "Blog",
        "Contact",
    ];

    return (
        <div className="hamenu one-scroll">
            <div className="logo icon-img-100">
                <img src={Logo} alt="" />
            </div>
            <div className="close-menu cursor-pointer ti-close"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="menu-text">
                            <div className="text">
                                <h2>Menu</h2>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <div className="col-lg-7">
                        <div className="menu-links">
                            <ul className="main-menu rest">
                                {menuItems.map((item, index) => (
                                    <li key={index} data-scroll-nav={index}>
                                        <div className="o-hidden">
                                            <div className="link cursor-pointer dmenu">
                                                <span className="fill-text" data-text={item}>
                                                    {item}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3">
                        <div className="cont-info">
                            <div className="item mb-50">
                                <h6 className="sub-title mb-15 opacity-7">Address</h6>
                                <h5>
                                    541 Melville Geek,
                                    <br /> Palo Alto, CA 94301
                                </h5>
                            </div>
                            <div className="item mb-50">
                                <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                                <ul className="rest social-text">
                                    {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                                        (social, index) => (
                                            <li className="mb-10" key={index}>
                                                <a href="#0" className="hover-this">
                                                    <span className="hover-anim">{social}</span>
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="item mb-40">
                                <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                                <h5>
                                    <a href="#0">Hello@email.com</a>
                                </h5>
                                <h5 className="underline mt-10">
                                    <a href="#0">+1 840 841 25 69</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
