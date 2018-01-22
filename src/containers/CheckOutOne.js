import React from 'react';
import { Row, Col } from 'react-bootstrap';
import OrderSummary from '../components/OrderSummary';

const CheckOutOne = () => {
    return(
        <div className="container">    
            <div> 
                <Col md={12}>
                    <ul className="breadcrumb">
                        <li><a href="checkout1.html#">Home</a>
                        </li>
                        <li>Checkout - Address
                        </li>
                    </ul>
                </Col>    
            </div>
            <div id="checkout">
                <Col md={9}>
                    <div className="box">
                        <form method="post" action="checkout2.html">
                            <h1>Checkout</h1>
                            <ul className="nav nav-pills nav-justified">
                                <li className="active"><a href="checkout1.html#"><i className="fa fa-map-marker"></i><br />Address</a>
                                </li>
                                <li className="disabled"><a href="checkout1.html#"><i className="fa fa-truck"></i><br />Delivery Method</a>
                                </li>
                                <li className="disabled"><a href="checkout1.html#"><i className="fa fa-money"></i><br />Payment Method</a>
                                </li>
                                <li className="disabled"><a href="checkout1.html#"><i className="fa fa-eye"></i><br />Order Review</a>
                                </li>
                            </ul>

                            <div className="content">
                                <div> 
                                    <Row>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="firstname">Firstname</label>
                                                    <input type="text" className="form-control" id="firstname" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="lastname">Lastname</label>
                                                    <input type="text" className="form-control" id="lastname" />
                                                </div>
                                            </Col>    
                                        </div>
                                    </Row>    
                                </div>

                                <div>
                                    <Row>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="company">Company</label>
                                                    <input type="text" className="form-control" id="company" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="street">Street</label>
                                                    <input type="text" className="form-control" id="street" />
                                                </div>
                                            </Col>    
                                        </div>
                                    </Row>    
                                </div>

                                <div> 
                                    <Row>
                                        <div> 
                                            <Col sm={6} md={3}>
                                                <div className="form-group">
                                                    <label for="city">Company</label>
                                                    <input type="text" className="form-control" id="city" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6} md={3}>
                                                <div className="form-group">
                                                    <label for="zip">ZIP</label>
                                                    <input type="text" className="form-control" id="zip" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6} md={3}>
                                                <div className="form-group">
                                                    <label for="state">State</label>
                                                    <select className="form-control" id="state"></select>
                                                </div>
                                            </Col>    
                                        </div>
                                        <div>
                                            <Col sm={6} md={3}>
                                                <div className="form-group">
                                                    <label for="country">Country</label>
                                                    <select className="form-control" id="country"></select>
                                                </div>
                                            </Col>    
                                        </div>

                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="phone">Telephone</label>
                                                    <input type="text" className="form-control" id="phone" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" className="form-control" id="email" />
                                                </div>
                                            </Col>    
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="basket.html" className="btn btn-default"><i className="fa fa-chevron-left"></i>Back to basket</a>
                                </div>
                                <div className="pull-right">
                                    <button type="submit" className="btn btn-primary">Continue to Delivery Method<i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>    
            </div>
            <div>
                <Col md={3}>
                    <OrderSummary />
                </Col>    

            </div>
        </div>
    );
}

export default CheckOutOne;