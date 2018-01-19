import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import {Link} from 'react-router-dom';

const CategoryDisplayLeft = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link>
                            </li>
                            <li>Ladies</li>
                        </ul>
                    </Col>    
                </div>
                    <SideBar />

                <div> 
                    <Col md={9}>
                        <div className="box">
                            <h1>Ladies</h1>
                            <p>In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide.</p>
                        </div>

                        <div className="box info-bar">
                            <div className="row">
                                <div className="products-showing">
                                    <Col sm={12} md={4}>
                                        Showing <strong>12</strong> of <strong>25</strong> products
                                    </Col>    
                                </div>

                                <div className="products-number-sort">
                                    <Col sm={12} md={8}>
                                        <div> 
                                            <Row>
                                                <form className="form-inline">
                                                    <div> 
                                                        <Col md={6} sm={6}>
                                                            <div className="products-number">
                                                                <strong>Show</strong>  <Link to="category.html#" className="btn btn-default btn-sm btn-primary">12</Link>  <Link to="category.html#" className="btn btn-default btn-sm">24</Link>  <Link to="category.html#" className="btn btn-default btn-sm">All</Link> products
                                                            </div>
                                                        </Col>    
                                                    </div>
                                                    <div>
                                                        <Col md={6} sm={6}>
                                                            <div className="products-sort-by">
                                                                <strong>Sort by</strong>
                                                                <select name="sort-by" className="form-control">
                                                                    <option>Price</option>
                                                                    <option>Name</option>
                                                                    <option>Sales first</option>
                                                                </select>
                                                            </div>
                                                        </Col>    
                                                    </div>
                                                </form>
                                            </Row>   
                                        </div>
                                    </Col>    
                                </div>
                            </div>
                        </div>

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

                        <div className="pages">

                            <p className="loadMore">
                                <Link to="category.html#" className="btn btn-primary btn-lg"><i className="fa fa-chevron-down"></i> Load more</Link>
                            </p>

                            <ul className="pagination">
                                <li><Link to="category.html#">&laquo;</Link>
                                </li>
                                <li className="active"><Link to="category.html#">1</Link>
                                </li>
                                <li><Link to="category.html#">2</Link>
                                </li>
                                <li><Link to="category.html#">3</Link>
                                </li>
                                <li><Link to="category.html#">4</Link>
                                </li>
                                <li><Link to="category.html#">5</Link>
                                </li>
                                <li><Link to="category.html#">&raquo;</Link>
                                </li>
                            </ul>
                        </div>

                    </Col>
                </div>
            </div>
        </div>
    );
}

export default CategoryDisplayLeft;

