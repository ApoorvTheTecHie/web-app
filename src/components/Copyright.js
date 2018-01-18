import React from 'react';
import { Col } from 'react-bootstrap';

const Copyright = () => {
    return(
        <div id="copyright">
            <div className="container">
                <div>
                    <Col md={6}>
                        <p className="pull-left">© 2018 Your Name Goes Here</p>
                    </Col>    

                </div>
            </div>
        </div>
    );
}

export default Copyright;