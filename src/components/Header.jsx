import React from 'react';
import Navlogo from '../assets/images/png/nav-logo.webp';
import { useState } from "react";
import { Container, Row } from 'react-bootstrap';
import Dashboard from '../assets/images/png/dashboard-img.png';
import Research from '../assets/images/png/jon-tyson-t2cp_cWMo3o-unsplash 2.png';
import Notification from '../assets/images/png/notification-img.png';
import { Dashboardhome } from './Iconimg';
import { Orangearrow } from './Iconimg';
import { Bluewave } from './Iconimg';
import { Teligram } from './Iconimg';
import { Playicon } from './Iconimg';
import { Star } from './Iconimg';
import { Comments } from './Iconimg';
import { Like } from './Iconimg';

const Header = () => {
  const [show, setshow] = useState(true)
   if (show === false) {
     document.body.classList.add("overflow_hidden");
    } else {
     document.body.classList.remove("overflow_hidden");
    }
  
  return (
    <div>
      <div className='header_bg_img'>
        <nav className='py-4 px-sm-5 px-3 position-relative top-0 z_5'>
          <Container fluid className=''>
            <div className='d-flex justify-content-between align-items-center'>
              <a href=''>
                <img src={Navlogo} alt="Navlogo" className='w-100 mw_259 h-100' />
              </a>
              <ul className={`${show ? "left_100" : "left_0"} nav_bar ps-0`}>
                <li className='position-relative'><a href='#Home' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_dm nav_link'>Home</a></li>
                <li className='position-relative'><a href='#Yourbenefits' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_dm nav_link'>Your benefits</a></li>
                <li className='position-relative'><a href='#Ourprocess' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_dm nav_link'>Our process</a></li>
                <li className='position-relative'><a href='#Ourworks' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_dm text-nowrap nav_link'>Our works</a></li>
                <li className='position-relative'><a href='#Testimonials' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_dm nav_link'>Testimonials</a></li>
                <li className='d-xl-none d-block z-1 cursor_pointer mt-3'>
                  <a href='' className='get_btn ff_dm fs_14 fw-bold text-nowrap'>Get started</a>
                </li>
              </ul>
              <div className='d-none d-xl-block z-1 cursor_pointer'>
                <a href='' className='get_btn ff_dm fs_14 fw-bold text-nowrap'>Get started</a>
              </div>
              <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navline`}>
                <span className='crl-1'></span>
                <span className='crl-2'></span>
                <span className='crl-3'></span>
              </div>
            </div>
          </Container>
        </nav>
        <Container id='Home' className='py_header'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='ff_dm text-white text-capitalize fs_68 fw-medium lh_120 m-0 pb-2 text-center '>A Digital Product Design Agency</h1>
            <p className='ff_dm text-white fw-normal fs_20 lh_170 opacity_8 m-0 pb-md-3 text-center'>We are Creative and Professional Digital Agency</p>
            <div className='cursor_pointer pt-4'>
              <a href='' className='get_btn ff_dm fs_14 fw-bold text-nowrap'>Get started</a>
            </div>
          </div>
          <div className='dashboard_img position-relative'>
            <img src={Dashboard} alt="Dashboard" className='w-100' />
            <div className='dashboard_home position-absolute dashboard_home_img'>
              <div className='d-flex justify-content-center align-items-center gap-1 gap-sm-3'>
                <Dashboardhome />
                <p className='ff_dm fw-medium fs_12 lh_136 clr_blue_700 m-0'>Dashboard</p>
              </div>
            </div>

            <div className='timebox_bg_img position-absolute'>
              <div className='time_box'>
                <p className='ff_nunito mb-0 fw-semibold fs_14 clr_blue_700 m-0 pb-md-2 pb-1'>Total time</p>
                <div className='d-sm-flex align-items-center gap-md-3 gap-2'>
                  <div className='d-flex align-items-center justify-content-sm-center gap-1'>
                    <p className='fs_10 ff_nunito mb-0 fw-normal text_gray mb-0'>Ring ratio</p>
                    <Orangearrow />
                    <p className='fs_10 ff_nunito fw-normal mb-0 text_orange'>60.59%</p>
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-1'>
                    <p className='fs_10 ff_nunito mb-0 fw-normal text_gray mb-0'>Year on year</p>
                    <Orangearrow />
                    <p className='fs_10 ff_nunito fw-normal mb-0 text_orange'>58.93%</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between gap-3 gap-lg-5 pt-lg-4'>
                  <div className=''>
                    <p className='ff_nunito fs_10 mb-0 fw-normal clr_blue_700 m-0'>today</p>
                    <p className='ff_nunito fs_23 mb-0 fw-bold text_voilet mt-md-2'>32,021</p>
                  </div>
                  <div className='d-none d-md-block'>
                    <Bluewave />
                  </div>
                </div>
              </div>
            </div>

            <div className='research_box position-absolute d-none d-sm-block'>
              <img src={Research} alt="Research" className='border_radius_9 mw_210 mw_150 mw_110' />
              <p className='ff_dm fw-medium fs_12 clr_blue_700 m-0 pt-1 pt-md-2'>UX Research</p>
              <p className='ff_dm fw-normal fs_9 text_lightgrey m-0 pb-1 pb-lg-2 pt-lg-1'>Project January  | by Michael Miles</p>
              <div className='d-flex gap_lg_10 gap-2'>
                <div className='svg_circles d-flex justify-content-center align-items-center'>
                  <Teligram />
                </div>
                <div className='svg_circles d-flex justify-content-center align-items-center'>
                  <Playicon />
                </div>
                <div className='svg_circles d-flex justify-content-center align-items-center'>
                  <Star />
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center pt-2'>
                <div className='d-flex align-items-center gap-1'>
                  <Comments />
                  <p className='ff_dm fw-normal fs_9 text_lightgrey m-0 lh_180'>14 Comments</p>
                </div>
                <Like />
              </div>
            </div>
            <div className='position-absolute notification_img d-none d-md-block'>
              <img src={Notification} alt="Notification" className='mw_277 mw_230 mw_140' />
            </div>

          </div>
        </Container>

      </div>
    </div>
  )
}

export default Header
