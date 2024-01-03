import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Workingimg from '../assets/images/png/working_img.png';
import Vector from '../assets/images/png/Vector.png';

const Work = () => {
    return (
        <div id='Ourworks'>
            <div className='work_bg_img py_work'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='col-11 pb-5 mb-sm-5 mb-lg-0 pb-lg-0' data-aos="fade-right">
                            <h3 className='how_work ff_dm fw-bold fs_12 text-white m-0 text-lg-start text-center'>start with us</h3>
                            <p className='ff_dm fw-medium fs_48 text-white lh_122 m-0 mw_414 pt-lg-4 pt-2 text-lg-start text-center'>Start working faster today</p>
                            <p className='ff_dm fw-normal text-white fs_20 lh_170 m-0 mw_408 pt-lg-4 pt-2 pb-3 text-lg-start text-center'>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
                            <div className='cursor_pointer mt-4 text-lg-start text-center'>
                                <a href='' className='get_btn ff_dm fs_14 fw-bold text-nowrap'>Get started</a>
                            </div>
                        </Col>
                        <Col lg={6} className='position-relative col-11 pt-5 pt-lg-0' data-aos="fade-left">
                            <img src={Workingimg} alt="Workingimg" className='w-100 position-relative z-2' />
                            <img src={Vector} alt="Vector" className='position-absolute work_vector'/>
                        </Col>
                    </Row>
                </Container>


            </div>

        </div>
    )
}

export default Work
