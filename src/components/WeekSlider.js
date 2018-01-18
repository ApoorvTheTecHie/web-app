import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const WeekSlider = () => {
    return(
    <div>    
        <div id="hot">
            <div className="box">
                <div className="container">
                    <div> 
                        <Col md={12}>
                            <h2>Hot this week</h2>
                        </Col>
                    </div>
                </div>
            </div>
            <div className="container">
                
                    <div>
                        <Col md={4}> 
                                <a href="detail.html">
                                    <img className="size" src="img/product1.jpg" alt="" />
                                </a>
                            <div className="text">
                                <h3><Link to="/detail">Fur coat with very but very very long name</Link></h3>
                                <p className="price">$143.00</p>
                            </div>
                            <div className="ribbon sale">
                                    <div className="theribbon">SALE</div>
                                    <div className="ribbon-background"></div>
                                </div>
                                <div className="ribbon new">
                                    <div className="theribbon">NEW</div>
                                    <div className="ribbon-background"></div>
                                </div> 
                                <div className="ribbon gift">
                                    <div className="theribbon">GIFT</div>
                                    <div className="ribbon-background"></div>
                                </div>   
                        </Col>    
                    </div>
                    
            
            </div> 
        </div>
    </div>                                           
    );
}

export default WeekSlider;