import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PagesSideNav from '../components/PagesSideNav';

const ContactPage = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="/">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                </div>
                <PagesSideNav />
                <div> 
                    <Col md={9}>


                        <div className="box" id="contact">
                            <h1>Contact</h1>

                            <p className="lead">Are you curious about something? Do you have some kind of problem with our products?</p>
                            <p>Please feel free to contact us, our customer service center is working for you 24/7.</p>

                            <hr />

                            <div> 
                                <Row>
                                    <div> 
                                        <Col sm={4}>
                                            <h3><i className="fa fa-map-marker"></i> Address</h3>
                                            <p>13/25 New Avenue
                                                <br />New Heaven
                                                <br />45Y 73J
                                                <br />England
                                                <br />
                                                <strong>Great Britain</strong>
                                            </p>
                                        </Col>    
                                    </div>
                                    <div> 
                                        <Col sm={4}>
                                            <h3><i className="fa fa-phone"></i> Call center</h3>
                                            <p className="text-muted">This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication.</p>
                                            <p><strong>+33 555 444 333</strong>
                                            </p>
                                        </Col>    
                                    </div>
                                    <div> 
                                        <Col sm={4}>
                                            <h3><i className="fa fa-envelope"></i> Electronic support</h3>
                                            <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                                            <ul>
                                                <li><strong><a href="mailto:">info@fakeemail.com</a></strong>
                                                </li>
                                                <li><strong><a href="contact.html#">Ticketio</a></strong> - our ticketing support platform</li>
                                            </ul>
                                        </Col>    
                                    </div>
                                </Row>    
                            </div>

                            <hr />

                            <div id="map">

                            </div>

                            <hr />
                            <h2>Contact form</h2>

                            <form>
                                <div> 
                                    <Row>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Firstname</label>
                                                    <input type="text" className="form-control" id="firstname" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Lastname</label>
                                                    <input type="text" className="form-control" id="lastname" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="text" className="form-control" id="email" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="form-group">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input type="text" className="form-control" id="subject" />
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={12}>
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea id="message" className="form-control"></textarea>
                                                </div>
                                            </Col>    
                                        </div>

                                        <div className="text-center">
                                            <Col sm={12}>
                                                <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Send message</button>
                                            </Col>
                                        </div>
                                    </Row>    
                                </div>
                            </form>


                        </div>
                    </Col>

                </div>
            </div>
        </div>
          
    );
}

export default ContactPage;