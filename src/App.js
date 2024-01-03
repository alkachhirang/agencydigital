import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Help from './components/Help';
import LeadingBrands from './components/LeadingBrands';
import Process from './components/Process';
import Work from './components/Work';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Iconimg';
import Backtotop from './assets/images/webp/back-to-top.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1000,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

 <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
            <>
              <div className='overflow-hidden'>
                <Header />
                <Help />
                <Process />
                <LeadingBrands />
                <Work />
                <Footer />
              </div>
              <div>
                <img onClick={() => top()} src={Backtotop} alt='Backtotop' className={backToTop ? "back_to_top mw_45 mw_55 z-3" : "d-none"} />
              </div>
            </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
