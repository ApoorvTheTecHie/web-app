//File Name: Header.js
//Path: src/component/
//Description: This is common header component for all pages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {Grid,Row,Col,Nav,Navbar,Button,Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import TopBar from './TopBar';

@connect((state) => state)
export default class Header extends Component {


	render () {
		
		return (
			<div>
				<TopBar />
			<div className="navbar navbar-default yamm" role="navigation" id="navbar">
        <div className="container">
            <div className="navbar-header">

                <Link className="navbar-brand home" to="/" data-animate-hover="bounce">
                    <img src="img/logo.png" alt="Obaju logo" className="hidden-xs" />
                    <img src="img/logo-small.png" alt="Obaju logo" className="visible-xs"/><span className="sr-only">Obaju - go to homepage</span>
                </Link>
                <div className="navbar-buttons">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <i className="fa fa-align-justify"></i>
                    </button>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#search">
                        <span className="sr-only">Toggle search</span>
                        <i className="fa fa-search"></i>
                    </button>
                    <Link className="btn btn-default navbar-toggle" to="basket.html">
                        <i className="fa fa-shopping-cart"></i>  <span className="hidden-xs">3 items in cart</span>
                    </Link>
                </div>
            </div>

            <div className="navbar-collapse collapse" id="navigation">

                <ul className="nav navbar-nav navbar-left">
                    <li className="active"><Link to="/">Home</Link>
                    </li>
                    <li className="dropdown yamm-fw">
                        <Link to="/product" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Men <b className="caret"></b></Link>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <Row>
                                        <div> 
                                        	<Col sm={3}>
	                                            <h5>Clothing</h5>
	                                            <ul>
	                                                <li><Link to="category.html">T-shirts</Link>
	                                                </li>
	                                                <li><Link to="category.html">Shirts</Link>
	                                                </li>
	                                                <li><Link to="category.html">Pants</Link>
	                                                </li>
	                                                <li><Link to="category.html">Accessories</Link>
	                                                </li>
	                                            </ul>
	                                        </Col>    
                                        </div>
                                        <div> 
                                        	<Col sm={3}>
                                            	<h5>Shoes</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                            </ul>
	                                        </Col>    
                                        </div>
                                        <div> 
                                        	<Col sm={3}>
                                            	<h5>Accessories</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                            </ul>
	                                        </Col>    
                                        </div>
                                        <div> 
                                        	<Col sm={3}>
	                                            <h5>Featured</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                            </ul>
	                                            <h5>Looks and trends</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>        
                                            	</ul>
                                            </Col>		
                                        </div>
                                    </Row>   
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown yamm-fw">
                        <Link to="/product" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Ladies <b className="caret"></b></Link>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h5>Clothing</h5>
                                            <ul>
                                                <li><Link to="category.html">T-shirts</Link>
                                                </li>
                                                <li><Link to="category.html">Shirts</Link>
                                                </li>
                                                <li><Link to="category.html">Pants</Link>
                                                </li>
                                                <li><Link to="category.html">Accessories</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                        	<Col sm={3}>
	                                            <h5>Shoes</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                            </ul>
	                                        </Col>    
                                        </div>
                                        <div>
                                        	<Col sm={3}>
	                                            <h5>Accessories</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                                <li><Link to="category.html">Casual</Link>
	                                                </li>
	                                            </ul>
	                                            <h5>Looks and trends</h5>
	                                            <ul>
	                                                <li><Link to="category.html">Trainers</Link>
	                                                </li>
	                                                <li><Link to="category.html">Sandals</Link>
	                                                </li>
	                                                <li><Link to="category.html">Hiking shoes</Link>
	                                                </li>
	                                            </ul>
	                                        </Col>    
                                        </div>
                                        <div>
                                        	<Col sm={3}>
	                                            <div className="banner">
	                                                <Link to="index.html#">
	                                                    <img src="img/banner.jpg" className="img img-responsive" alt="" />
	                                                </Link>
	                                            </div>
	                                            <div className="banner">
	                                                <Link to="index.html#">
	                                                    <img src="img/banner2.jpg" className="img img-responsive" alt="" />
	                                                </Link>
												</div>
											</Col>	
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown yamm-fw">
                        <Link to="index.html#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Template <b className="caret"></b></Link>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h5>Shop</h5>
                                            <ul>
                                                <li><Link to="index.html">Homepage</Link>
                                                </li>
                                                <li><Link to="category.html">Category - sidebar left</Link>
                                                </li>
                                                <li><Link to="category-right.html">Category - sidebar right</Link>
                                                </li>
                                                <li><Link to="category-full.html">Category - full width</Link>
                                                </li>
                                                <li><Link to="detail.html">Product detail</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>User</h5>
                                            <ul>
                                                <li><Link to="register.html">Register / login</Link>
                                                </li>
                                                <li><Link to="customer-orders.html">Orders history</Link>
                                                </li>
                                                <li><Link to="customer-order.html">Order history detail</Link>
                                                </li>
                                                <li><Link to="customer-wishlist.html">Wishlist</Link>
                                                </li>
                                                <li><Link to="customer-account.html">Customer account / change password</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Order process</h5>
                                            <ul>
                                                <li><Link to="basket.html">Shopping cart</Link>
                                                </li>
                                                <li><Link to="checkout1.html">Checkout - step 1</Link>
                                                </li>
                                                <li><Link to="checkout2.html">Checkout - step 2</Link>
                                                </li>
                                                <li><Link to="checkout3.html">Checkout - step 3</Link>
                                                </li>
                                                <li><Link to="checkout4.html">Checkout - step 4</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Pages and blog</h5>
                                            <ul>
                                                <li><Link to="blog.html">Blog listing</Link>
                                                </li>
                                                <li><Link to="post.html">Blog Post</Link>
                                                </li>
                                                <li><Link to="faq.html">FAQ</Link>
                                                </li>
                                                <li><Link to="text.html">Text page</Link>
                                                </li>
                                                <li><Link to="text-right.html">Text page - right sidebar</Link>
                                                </li>
                                                <li><Link to="404.html">404 page</Link>
                                                </li>
                                                <li><Link to="contact.html">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            

            <div className="navbar-buttons">

                <div className="navbar-collapse collapse right" id="basket-overview">
                    <Link to="/cart" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart"></i><span className="hidden-sm">3 items in cart</span></Link>
                </div>
                

                <div className="navbar-collapse collapse right" id="search-not-mobile">
                    <button type="button" className="btn navbar-btn btn-primary" data-toggle="collapse" data-target="#search">
                        <span className="sr-only">Toggle search</span>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>

            <div className="collapse clearfix" id="search">

                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        	<span className="input-group-btn">

								<button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>

		    				</span>
                    </div>
                </form>

            </div>
            

		</div>
    </div>
			</div>
		)
	}
}