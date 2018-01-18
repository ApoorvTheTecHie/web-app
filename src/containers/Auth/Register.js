import React from 'react';
import { Col } from 'react-bootstrap';
import Login from './Login';

const Register = () => {
    return(
    <div> 
        <div id="content">
            <div className="container">   
                <div>
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="register.html#">Home</a>
                            </li>
                            <li>New account / Sign in
                            </li>
                        </ul>
                    </Col>    
                </div>    
                <div>
                    <Col md={6}>
                        <div className="box">
                            <h1>New account</h1>

                            <p className="lead">Not our registered customer yet?</p>
                            <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                            <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working htmlFor you 24/7.</p>

                            <hr />

                            <form action="customer-orders.html" method="post">
                                <div className="htmlForm-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-user-md"></i> Register</button>
                                </div>
                            </form>
                        </div>
                    </Col> 
                        <Login />       
                </div>  
            </div>
        </div>                
    </div>            
    );
}

export default Register;