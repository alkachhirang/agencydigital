import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Grow, Drive, Handle, Ux, Business, Data } from './Iconimg';

const Help = () => {
    return (
        <div id='Yourbenefits' className='my_help help_bg_img'>
            <Container>
                <div>
                    <h2 className='ff_dm fs_12 text-uppercase fw-bold brand pb-md-4 pt-3 pt-md-0 text-md-start text-center'>features</h2>
                    <p className='ff_dm fw-medium fs_48 clr_black lh_122 m-0 mw_528 pb-2 text-md-start text-center'>We are here to help you with</p>
                </div>
                <Row className='pt-4 align-items-center justify-content-center'> 
                    <Col lg={4} md ={6} className='col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Grow />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>Grow your business</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'><span className='fw-bold ff_dm'>The magic wand </span> for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</p>
                        </div>
                    </Col>
                    <Col lg={4} md ={6} className='pt-4 pt-md-0 col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Drive />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>Drive more sales</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'> A potential customer, once lost, is hard to retain back. But <span className='fw-bold ff_dm'>keeping some critical </span> factors in mind, we can, for sure, use these loyalty programs as customer retention tools.</p>
                        </div>
                    </Col>
                    <Col lg={4} md ={6} className='pt-4 pt-lg-0 col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Handle />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>Handle by Expert</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'> We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively</p>
                        </div>
                    </Col>
                    <Col lg={4} md ={6} className='pt-4 col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Ux />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>UX Research</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'> UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.</p>
                        </div>
                    </Col>
                    <Col lg={4} md ={6} className='pt-4 col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Business />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>Business Audit</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'> An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                        </div>
                    </Col>
                    <Col lg={4} md ={6} className='pt-4 col-11'>
                        <div className='helpcard'>
                            <div className='pb-1 cursor_pointer'>
                                <Data />
                            </div>
                            <h3 className='ff_dm clr_black fw-bold fs_22 pt-3 m-0'>Data tracking</h3>
                            <p className='ff_nunito fw-lighter fs_16 lh_150 pt-3'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Help
