import React from 'react';
import { Col, Table } from 'react-bootstrap';
import OrderSummary from '../components/OrderSummary';

const ShoppingCart = () => {
    return (
        <div className="container">
            <div> 
                <Col md={12}>
                    <ul className="breadcrumb">
                        <li><a href="basket.html#">Home</a>
                        </li>
                        <li>Shopping cart</li>
                    </ul>
                </Col>    
            </div>
            <div id="basket">
                <Col md={9}>
                    <div className="box">

                        <form method="post" action="checkout1.html">

                            <h1>Shopping cart</h1>
                            <p className="text-muted">You currently have 3 item(s) in your cart.</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan="2">Product</th>
                                            <th>Quantity</th>
                                            <th>Unit price</th>
                                            <th>Discount</th>
                                            <th colSpan="2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="basket.html#">
                                                    <img src="img/detailsquare.jpg" alt="White Blouse Armani" />
                                                </a>
                                            </td>
                                            <td><a href="basket.html#">White Blouse Armani</a>
                                            </td>
                                            <td>
                                                <input type="number" defaultValue={2} className="form-control" />
                                            </td>
                                            <td>$123.00</td>
                                            <td>$0.00</td>
                                            <td>$246.00</td>
                                            <td><a href="basket.html#"><i className="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="basket.html#">
                                                    <img src="img/basketsquare.jpg" alt="Black Blouse Armani" />
                                                </a>
                                            </td>
                                            <td><a href="basket.html#">Black Blouse Armani</a>
                                            </td>
                                            <td>
                                                <input type="number" defaultValue={1} className="form-control" />
                                            </td>
                                            <td>$200.00</td>
                                            <td>$0.00</td>
                                            <td>$200.00</td>
                                            <td><a href="basket.html#"><i className="fa fa-trash-o"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="5">Total</th>
                                            <th colSpan="2">$446.00</th>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>

                            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="category.html" className="btn btn-default"><i className="fa fa-chevron-left"></i> Continue shopping</a>
                                </div>
                                <div className="pull-right">
                                    <button className="btn btn-default"><i className="fa fa-refresh"></i> Update basket</button>
                                    <button type="submit" className="btn btn-primary">Proceed to checkout <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>

                        </form>

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
                </Col>

                </div>

                <div> 
                    <Col md={3}>
                        <OrderSummary />
                        <div className="box">
                            <div className="box-header">
                                <h4>Coupon code</h4>
                            </div>
                            <p className="text-muted">If you have a coupon code, please enter it in the box below.</p>
                            <form>
                                <div className="input-group">

                                    <input type="text" className="form-control" />

                                    <span className="input-group-btn">

                        <button className="btn btn-primary" type="button"><i className="fa fa-gift"></i></button>

                        </span>
                                </div>
                            </form>
                        </div>
                    </Col>
                </div>
            </div> 
    );
}

export default ShoppingCart;