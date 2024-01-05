import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Business from '../assets/images/png/business-audit-img.png';
import { Businessaudit, DataSvg, ResultsSvg } from './Iconimg';
import Datatracking from '../assets/images/png/data-tracking.png';
import Result from '../assets/images/png/result-img.png';

const Process = () => {
    return (
        <div id='Ourprocess' className='py_process process_bg_img position-relative'>
            <div className='process_line'></div>
            <Container>
                <div className='d-flex justify-content-center align-items-center flex-column pb-4'>
                    <h2 className='ff_dm fw-bold fs_12 text-uppercase text-white how_work text-center m-0 pb-md-3 pb-2' data-aos="fade-down">how it works</h2>
                    <p className='ff_dm text-white fs_48 fw-medium lh_122 text-center m-0 pb-md-4 pb-2' data-aos="fade-down">Our Process</p>
                    <p className='ff_dm fs_20 fw-normal lh_170 text-center text-white mw_718' data-aos="fade-down">We know the best solution for all of your business ideas and we can help you solve all business problems</p>
                </div>
                <div className='business_box mt-2 mb_lg_40'>
                    <Row className=''>
                        <Col xl={6} className='col-12' data-aos="fade-right">
                            <img src={Business} alt="Business" className='w-100' />
                        </Col>
                        <Col xl={6} className='col-12 d-flex align-items-center justify-content-center flex-column pb-3 ps-lg-5' data-aos="fade-left">
                            <div>
                                <div className='pb-3'>
                                    <Businessaudit />
                                </div>
                                <p className='clr_black ff_dm fs_22 fw-bold lh_136 m-0 pt-1'>Business Audit</p>
                                <p className='ff_dm fs_16 fw-normal lh_150 m-0 text_lightblack pt-sm-3 pt-2'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                            </div>
                        </Col>

                    </Row>

                </div>
                <div className='business_box mt-4 mb_lg_40'>
                    <Row className=''>
                        <Col xl={6} className='col-12' data-aos="fade-right">
                            <img src={Datatracking} alt="Datatracking" className='w-100' />
                        </Col>
                        <Col xl={6} className='col-12 d-flex align-items-center justify-content-center flex-column pb-3 ps-lg-5' data-aos="fade-left">
                            <div>
                                <div className='pb-3'>
                                    <DataSvg />
                                </div>
                                <p className='clr_black ff_dm fs_22 fw-bold lh_136 m-0 pt-1'>Data tracking</p>
                                <p className='ff_dm fs_16 fw-normal lh_150 m-0 text_lightblack pt-sm-3 pt-2'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                            </div>
                        </Col>

                    </Row>

                </div>
                <div className='business_box mt-4 mb_lg_40'>
                    <Row className=''>
                        <Col xl={6} className='col-11' data-aos="fade-right">
                            <img src={Result} alt="Result" className='w-100' />
                        </Col>
                        <Col xl={6} className='col-11 d-flex align-items-center justify-content-center flex-column pb-3 ps-lg-5' data-aos="fade-left">
                            <div>
                                <div className='pb-3'>
                                    <ResultsSvg />
                                </div>
                                <p className='clr_black ff_dm fs_22 fw-bold lh_136 m-0 pt-1'>Results</p>
                                <p className='ff_dm fs_16 fw-normal lh_150 m-0 text_lightblack pt-sm-3 pt-2'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                            </div>
                        </Col>

                    </Row>

                </div>
            </Container>

        </div>
    )
}

export default Process
