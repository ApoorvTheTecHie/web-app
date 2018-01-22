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
                
            <div className="row products">

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product1.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product1.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">Fur coat with very but very very long name</Link></h3>
                <p className="price">$143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>
            </div>
    
        </div>
    </Col>
</div>

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product2.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">White Blouse Armani</Link></h3>
                <p className="price"><del>$280</del> $143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>
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
        
        </div>
    </Col>
</div>

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product3.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product3.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">Black Blouse Versace</Link></h3>
                <p className="price">$143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>

            </div>

        </div>
    </Col>
</div>

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product3.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product3.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">Black Blouse Versace</Link></h3>
                <p className="price">$143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>

            </div>
        </div>
    </Col>    
</div>

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product2.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">White Blouse Versace</Link></h3>
                <p className="price">$143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>

            </div>

            <div className="ribbon new">
                <div className="theribbon">NEW</div>
                <div className="ribbon-background"></div>
            </div>
        </div>
    </Col>    
</div>

<div> 
    <Col md={4} sm={6}>
        <div className="product">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <Link to="/detail">
                            <img src="img/product1.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                    <div className="back">
                        <Link to="/detail">
                            <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/detail" className="invisible">
                <img src="img/product1.jpg" alt="" className="img-responsive" />
            </Link>
            <div className="text">
                <h3><Link to="/detail">Fur coat</Link></h3>
                <p className="price">$143.00</p>
                <p className="buttons">
                    <Link to="/detail" className="btn btn-default" style={{marginRight: 0.5 + 'em'}}>View detail</Link>
                    <Link to="/cart" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                </p>

            </div>

            <div className="ribbon gift">
                <div className="theribbon">GIFT</div>
                <div className="ribbon-background"></div>
            </div>

        </div>
    </Col>    
</div>
</div>
                    
            
            </div> 
        </div>
    </div>                                           
    );
}

export default WeekSlider;