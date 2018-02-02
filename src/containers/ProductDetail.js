import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../components/SideBar';
const ProductDetail = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="detail.html#">Home</a>
                            </li>
                            <li><a href="detail.html#">Ladies</a>
                            </li>
                            <li><a href="detail.html#">Tops</a>
                            </li>
                            <li>White Blouse Armani</li>
                        </ul>
                    </Col>    
                </div>

                    <SideBar />    
                <div>
                    <Col md={9}>
                        <div className="row" id="productMain">
                                <div> 
                                    <Col sm={6}>
                                        <div id="mainImage">
                                            <img src="img/detailbig1.jpg" alt="" className="img-responsive" />
                                        </div>

                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                    </Col>            
                                </div>
                            <div> 
                                <Col sm={6}>
                                    <div className="box">
                                        <h1 className="text-center">White Blouse Armani</h1>
                                        <p className="goToDescription"><a href="/detail#details" className="scroll-to">Scroll to product details, material & care and sizing</a>
                                        </p>
                                        <p className="price">$124.00</p>

                                        <p className="text-center buttons">
                                            <a href="basket.html" className="btn btn-primary" style={{marginRight : '0.5em'}}><i className="fa fa-shopping-cart"></i> Add to cart</a> 
                                            <a href="basket.html" className="btn btn-default"><i className="fa fa-heart"></i> Add to wishlist</a>
                                        </p>


                                    </div>

                                    <div id="thumbs"> 
                                        <Row>
                                            <div> 
                                                <Col xs={4}>
                                                    <a href="img/detailbig1.jpg" className="thumb">
                                                        <img src="img/detailsquare.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col xs={4}>
                                                    <a href="img/detailbig2.jpg" className="thumb">
                                                        <img src="img/detailsquare2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col xs={4}>
                                                    <a href="img/detailbig3.jpg" className="thumb">
                                                        <img src="img/detailsquare3.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>
                                </Col>    
                            </div>

                        </div>


                        <div className="box" id="details">
                            
                                <h4>Product details</h4>
                                <p>White lace top, woven, has a round neck, short sleeves, has knitted lining attached</p>
                                <h4>Material & care</h4>
                                <ul>
                                    <li>Polyester</li>
                                    <li>Machine wash</li>
                                </ul>
                                <h4>Size & Fit</h4>
                                <ul>
                                    <li>Regular fit</li>
                                    <li>The model (height 5'8" and chest 33") is wearing a size S</li>
                                </ul>

                                <blockquote>
                                    <p><em>Define style this season with Armani's new range of trendy 
                                        tops, crafted with intricate details. Create a chic statement 
                                        look by teaming this lace number with skinny jeans and pumps.</em>
                                    </p>
                                </blockquote>

                                <hr />
                                <div className="social">
                                    <h4>Show it to your friends</h4>
                                    <p>
                                        <a href="detail.html#" className="external facebook" data-animate-hover="pulse"><i className="fa fa-facebook"></i></a>
                                        <a href="detail.html#" className="external gplus" data-animate-hover="pulse"><i className="fa fa-google-plus"></i></a>
                                        <a href="detail.html#" className="external twitter" data-animate-hover="pulse"><i className="fa fa-twitter"></i></a>
                                        <a href="detail.html#" className="email" data-animate-hover="pulse"><i className="fa fa-envelope"></i></a>
                                    </p>
                                </div>    
                        </div>

                        <div className="row same-height-row">
                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="box same-height">
                                        <h3>You may also like these products</h3>
                                    </div>
                                </Col>    
                            </div>

                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product2.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>
                                        </div>
                                    </div>
                                </Col>    
                            </div>

                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product1.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product1.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>
                                        </div>
                                    </div>
                                </Col>    
                            </div>


                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product3.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product3.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>

                                        </div>
                                    </div>
                                </Col>    
                            </div>

                        </div>

                        <div className="row same-height-row">
                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="box same-height">
                                        <h3>Products viewed recently</h3>
                                    </div>
                                </Col>    
                            </div>


                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product2.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>
                                        </div>
                                    </div>
                                </Col>    
                            </div>

                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product1.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product1.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>
                                        </div>
                                    </div>
                                </Col>    
                            </div>


                            <div> 
                                <Col md={3} sm={6}>
                                    <div className="product same-height">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product3.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product3.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3>Fur coat</h3>
                                            <p className="price">$143</p>

                                        </div>
                                    </div>
                                </Col>    
                            </div>
                        </div>
                    </Col>    
                </div>
            </div>  
        </div>                 
    );
}

export default ProductDetail;