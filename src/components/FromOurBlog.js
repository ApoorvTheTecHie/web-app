import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const FromOurBlog = () => {
    return(
    <div>    
        <div className="box text-center" data-animate="fadeInUp">
                <div className="container">
                    <div> 
                        <Col md={12}>
                            <h3 className="text-uppercase">From our blog</h3>

                            <p className="lead">What's new in the world of fashion? <a href="blog.html">Check our blog!</a>
                            </p>
                        </Col>    
                    </div>
                </div>
            </div>
            <div className="container">

                <div data-animate="fadeInUp"> 
                    <Col md={12}>

                        <div id="blog-homepage" className="row">
                            <div>
                                <Col sm={6}>
                                    <div className="post">
                                        <h4><Link to="/blog">Fashion now</Link></h4>
                                        <p className="author-category">By <Link to="/">John Slim</Link> in <Link to="/">Fashion and style</Link>
                                        </p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                            ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><Link to="/blog" className="btn btn-primary">Continue reading</Link>
                                        </p>
                                    </div>
                                </Col>
                            </div>

                                <div> 
                                    <Col sm={6}>
                                        <div className="post">
                                            <h4><Link to="/blog">Who is who - example blog post</Link></h4>
                                            <p className="author-category">By <Link to="/blog">John Slim</Link> in <Link to="/">About Minimal</Link>
                                            </p>
                                            <hr />
                                            <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                                ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                            <p className="read-more"><Link to="/blog" className="btn btn-primary">Continue reading</Link>
                                            </p>
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

export default FromOurBlog;