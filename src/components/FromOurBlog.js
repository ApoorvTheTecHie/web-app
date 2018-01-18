import React from 'react';
import { Col } from 'react-bootstrap';

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
                                        <h4><a href="post.html">Fashion now</a></h4>
                                        <p className="author-category">By <a href="index.html#">John Slim</a> in <a href="index.html">Fashion and style</a>
                                        </p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                            ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a>
                                        </p>
                                    </div>
                                </Col>
                            </div>

                                <div> 
                                    <Col sm={6}>
                                        <div className="post">
                                            <h4><a href="post.html">Who is who - example blog post</a></h4>
                                            <p className="author-category">By <a href="index.html#">John Slim</a> in <a href="index.html">About Minimal</a>
                                            </p>
                                            <hr />
                                            <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                                ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                            <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a>
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