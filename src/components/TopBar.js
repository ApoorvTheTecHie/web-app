import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar(props){
    return(
        <div id="top">
                <div className="container">
                    <div className="offer" data-animate="fadeInDown">
                        <Col md={6}>
                            <a href="index.html#" className="btn btn-success btn-sm">Offer of the day</a>  <a href="index.html#">Get flat 35% off on orders over $50!</a>
                        </Col>
                    </div>
                    <div className="fadeInDown">
                        <Col md={6}>
                            <ul className="menu">
                                <li><Link to="/login" data-toggle="modal" data-target="#login-modal">Login</Link>
                                </li>
                                <li><Link to="/register">Register</Link>
                                </li>
                                <li><Link to="/contact">Contact</Link>
                                </li>
                                <li><Link to="/admin">Admin Login</Link>
                                </li>
                            </ul>
                        </Col>    
                    </div>
                </div>
                <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true">
                    <div className="modal-dialog modal-sm">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="Login">Customer login</h4>
                            </div>
                            <div className="modal-body">
                                <form action="customer-orders.html" method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="email-modal" placeholder="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password-modal" placeholder="password" />
                                    </div>

                                    <p className="text-center">
                                        <button className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                                    </p>
                                </form>

                                <p className="text-center text-muted">Not registered yet?</p>
                                <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        );
}

export default TopBar;

