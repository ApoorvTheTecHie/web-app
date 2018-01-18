import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PagesSideNav from '../components/PagesSideNav';

const TextPage = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="text.html#">Home</a>
                            </li>
                            <li>Text page</li>
                        </ul>
                    </Col>    
                </div>
                <PagesSideNav />
                <div> 
                    <Col md={9}>

                        <div className="box" id="text-page">
                            <h1>Text formatting - Header level 1</h1>

                            <p className="lead">This page aim is to show you the most 
                                common HTML elements appearance on the website. 
                                For further reference please visit 
                                official <a href="http://getbootstrap.com/css/" className="external">Bootstrap website</a>.
                            </p>

                            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
                                placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                                rutrum orci, sagittis tempus lacus enim ac dui. <a href="text.html#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                            <h2>Header Level 2</h2>

                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                            </ol>

                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vivamus magna. Cras in mi at felis aliquet congue. Ut 
                                    a est eget ligula molestie gravida. Curabitur massa. 
                                    Donec eleifend, libero at sagittis mollis, tellus est 
                                    malesuada
                                    tellus, at luctus turpis elit sit amet quam. 
                                    Vivamus pretium ornare est.
                                </p>
                            </blockquote>

                            <h3>Header Level 3</h3>

                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                            </ul>

                            <hr />

                            <h2>Images</h2>

                            <div> 
                                <Row>
                                    <div> 
                                        <Col md={4}>
                                            <p className="text-center">
                                                <img src="img/detailsquare.jpg" className="img-circle img-responsive" alt="" />
                                            </p>
                                            <p className="text-center">circle</p>
                                        </Col>    
                                    </div>
                                    <div> 
                                        <Col md={4}>
                                            <p className="text-center">
                                                <img src="img/detailsquare.jpg" className="img-thumbnail  img-responsive" alt="" />
                                            </p>
                                            <p className="text-center">thumbnail</p>
                                        </Col>    
                                    </div>
                                    <div> 
                                        <Col md={4}>
                                            <p className="text-center">
                                                <img src="img/detailsquare.jpg" className="img-rounded img-responsive" alt="" />
                                            </p>
                                            <p className="text-center">rounded</p>
                                        </Col>    
                                    </div>
                                </Row>    
                            </div>
                        </div>
                    </Col>    
                </div>
            </div>                
        </div>
    );
}

export default TextPage;