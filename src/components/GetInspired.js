import React from 'react';
import { Col } from 'react-bootstrap';

const GetInspired = () => {
    return(
        <div className="container" data-animate="fadeInUpBig">
                <div> 
                    <Col md={12}>
                        <div className="box slideshow">
                            <h3>Get Inspired</h3>
                            <p className="lead">Get the inspiration from our world class designers</p>
                            <div id="get-inspired">
                                <div className="item">
                                    <a href="index.html#">
                                        <img src="img/getinspired1.jpg" alt="Get inspired" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>    
                </div>
            </div>
    );
}

export default GetInspired;