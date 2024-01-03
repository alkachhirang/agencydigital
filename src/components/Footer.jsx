import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../assets/images/webp/FooterLogo.webp";
import { Facebook } from "./Iconimg";
import { Instagram } from "./Iconimg";
import { Twitter } from "./Iconimg";

const Footer = () => {
    return (
        <>
            <div className=" bg-black">
                <Container className="custom_container">
                    <div className=" d-flex flex-xl-row flex-column justify-content-between align-items-center pb-4 pt_footer">
                        <div className=" pb-4 pb-xl-0">
                            <a href="">
                                <img
                                    src={FooterLogo}
                                    alt="FooterLogo"
                                    className=" w-100 h-100 mw_176"
                                />
                            </a>
                        </div>
                        <div className=" pb-5 pb-xl-0">
                            {" "}
                            <ul className="flex_flow_wrap justify-content-center list-unstyled d-flex gap_32 align-items-center mb-0">
                                <li>
                                    <a
                                        className="text_white fs_16 text-nowrap fw-medium lh_100  nav_link position-relative"
                                        href="#Home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text_white fs_16 fw-medium text-nowrap lh_100  nav_link position-relative"
                                        href="#Yourbenefits"
                                    >
                                        Your benefits
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text_white fs_16 fw-medium text-nowrap lh_100  nav_link position-relative"
                                        href="#Ourprocess"
                                    >
                                        Our process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text_white fs_16 fw-medium text-nowrap lh_100  nav_link position-relative"
                                        href="#Ourworks"
                                    >
                                        Our works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text_white fs_16 fw-medium text-nowrap lh_100  nav_link position-relative"
                                        href="#Testimonials"
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text_white fs_16 fw-medium text-nowrap lh_100  nav_link position-relative"
                                        href="#StartProject"
                                    >
                                        Start a project
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" d-flex gap_20">
                            <div className='footer_icon'>
                                <Facebook />
                            </div>
                            <div className='footer_icon'>
                                <Instagram />
                            </div>
                            <div className='footer_icon'>
                                <Twitter />
                            </div>
                        </div>
                    </div>
                    <div className=" border-bottom border_color"></div>
                    <div className=" mt-4 pt-1 d-flex justify-content-between align-items-center pb_38">
                        <p className=" mb-0 text-white opacity_80 lh_166 fw-normal fs_15">
                            Â© 2021 Company
                        </p>
                        <div className=" d-flex gap-4">
                            <p className=" mb-0 lh_133 fs_15 fw-normal text_white opacity_80">
                                Privacy policy
                            </p>
                            <p className=" mb-0 lh_133 fs_15 fw-normal text_white opacity_80">
                                Term of service
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;