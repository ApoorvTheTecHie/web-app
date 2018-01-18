//File Name: Footer.js
//Path: src/component/
//Description: This is common footer for all pages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {Grid,Col,Row,Button,Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import CopyRight from './Copyright';

@connect((state) => state)
export default class Footer extends Component {
	render () {
		const { pathname } = this.props.location;
		
		return (
            <div id="all">
			<footer>
			<div id="footer" data-animate="fadeInUp">
            <div className="container">
                <div className="row">
                    <div>
                        <Col md={3} sm={6}>
                            <h4>Pages</h4>

                            <ul>
                                <li><Link to="/text">About Us </Link>
                                </li>
                                <li><Link to="/text">Terms and conditions </Link>
                                </li>
                                <li><Link to="/faq">FAQ</Link>
                                </li>
                                <li><Link to="/contact">Contact us</Link>
                                </li>
                            </ul>

                            <hr />

                            <h4>User section</h4>

                            <ul>
                                <li><Link to="/login" data-toggle="modal" data-target="#login-modal">Login</Link>
                                </li>
                                <li><Link to="/register">Register</Link>
                                </li>
                            </ul>

                            <hr className="hidden-md hidden-lg hidden-sm" />
                        </Col>    

                    </div>

                    <div>
                        <Col md={3} sm={6}>

                            <h4>Top categories</h4>

                            <h5>Men</h5>

                            <ul>
                                <li><a href="category.html">T-shirts</a>
                                </li>
                                <li><a href="category.html">Shirts</a>
                                </li>
                                <li><a href="category.html">Accessories</a>
                                </li>
                            </ul>

                            <h5>Ladies</h5>
                            <ul>
                                <li><a href="category.html">T-shirts</a>
                                </li>
                                <li><a href="category.html">Skirts</a>
                                </li>
                                <li><a href="category.html">Pants</a>
                                </li>
                                <li><a href="category.html">Accessories</a>
                                </li>
                            </ul>

                            <hr className="hidden-md hidden-lg" />
                        </Col>    

                    </div>

                    <div>
                        <Col md={3} sm={6}>

                            <h4>Where to find us</h4>

                            <p><strong>Obaju Ltd.</strong>
                                <br />13/25 New Avenue
                                <br />New Heaven
                                <br />45Y 73J
                                <br />England
                                <br />
                                <strong>Great Britain</strong>
                            </p>

                            <a href="contact.html">Go to contact page</a>
                            <hr className="hidden-md hidden-lg" />
                        </Col>    

                    </div>
                    <div> 
                        <Col md={3} sm={6}> 
                            <h4>Get the news</h4>

                            <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Subscribe!</button>
                                    </span>
                                </div>
                            </form>
                            <hr />
                            <h4>Stay in touch</h4>

                                <p className="social">
                                    <a href="index.html#" className="facebook external" data-animate-hover="shake"><i className="fa fa-facebook"></i></a>
                                    <a href="index.html#" className="twitter external" data-animate-hover="shake"><i className="fa fa-twitter"></i></a>
                                    <a href="index.html#" className="instagram external" data-animate-hover="shake"><i className="fa fa-instagram"></i></a>
                                    <a href="index.html#" className="gplus external" data-animate-hover="shake"><i className="fa fa-google-plus"></i></a>
                                    <a href="index.html#" className="email external" data-animate-hover="shake"><i className="fa fa-envelope"></i></a>
                                </p>
                        </Col>  
                    </div>
                </div>
            </div>
        </div>
			</footer>
            <CopyRight />
        </div>    
			
		)
	}
}