import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogSideNav from '../components/BlogSideNav';

const BlogPost = () => {
    return(
        <div id="content">
            <div className="container">
                <div> 
                    <Col sm={12}>
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a>
                            </li>
                            <li><a href="blog.html">Blog</a>
                            </li>
                            <li>Blog post</li>
                        </ul>
                    </Col>    
                </div>
                <div id="blog-post">
                    <Col sm={9}>
                        <div className="box">

                            <h1>Fashion now</h1>
                            <p className="author-date">By <a href="post.html#">John Slim</a> | June 20, 2013</p>
                            <p className="lead">This is the lead paragraph of the article. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.</p>

                            <div id="post-content">
                                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                                    semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
                                    fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="post.html#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                                <p>
                                    <img src="img/blog2.jpg" className="img-responsive" alt="Example blog post alt" />
                                </p>

                                <h2>Header Level 2</h2>

                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                </ol>

                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Vivamus magna. Cras in mi at felis aliquet 
                                        congue. Ut a est eget ligula molestie gravida. 
                                        Curabitur massa. Donec eleifend, libero at sagittis 
                                        mollis, tellus est malesuada
                                        tellus, at luctus turpis elit sit amet quam. 
                                        Vivamus pretium ornare est.
                                    </p>
                                </blockquote>

                                <h3>Header Level 3</h3>

                                <p>Pellentesque habitant morbi tristique senectus et netus et 
                                    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec 
                                    eu libero sit amet quam egestas semper. Aenean
                                    ultricies mi vitae est. Mauris placerat eleifend leo. 
                                    Quisque sit amet est et sapien ullamcorper pharetra. 
                                    Vestibulum erat wisi, condimentum sed, commodo vitae, 
                                    ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus 
                                    enim ac dui. Donec non enim in turpis pulvinar facilisis. 
                                    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor 
                                    neque egestas augue, eu vulputate magna eros
                                    eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, 
                                    accumsan porttitor, facilisis luctus, metus
                                </p>

                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                </ul>

                                <p>
                                    <img src="img/blog.jpg" className="img-responsive" alt="Example blog post alt" />
                                </p>

                                <p>Pellentesque habitant morbi tristique senectus et 
                                    netus et malesuada fames ac turpis egestas. 
                                    Vestibulum tortor quam, feugiat vitae, 
                                    ultricies eget, tempor sit amet, ante. 
                                    Donec eu libero sit amet quam egestas semper. 
                                    Aenean ultricies mi vitae est. Mauris placerat 
                                    eleifend leo. Quisque sit amet est et sapien 
                                    ullamcorper pharetra. Vestibulum erat wisi, 
                                    condimentum sed, commodo vitae, ornare sit 
                                    amet, wisi. Aenean fermentum, elit eget tincidunt
                                    condimentum, eros ipsum rutrum orci, sagittis 
                                    tempus lacus enim ac dui. Donec non enim in turpis 
                                    pulvinar facilisis. Ut felis. Praesent dapibus, neque 
                                    id cursus faucibus, tortor neque egestas augue, eu 
                                    vulputate magna eros eu erat. Aliquam erat volutpat. 
                                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                                </p>

                            </div>

                            <div id="comments" data-animate="fadeInUp">
                                <h4>2 comments</h4>


                                <div className="row comment">
                                        <div className="text-center-xs">
                                            <Col sm={3} md={2}>
                                                <p>
                                                    <img src="img/blog-avatar2.jpg" className="img-responsive img-circle" alt="" />
                                                </p>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={9} md={10}>
                                                <h5>Julie Alma</h5>
                                                <p className="posted"><i className="fa fa-clock-o"></i> September 23, 2011 at 12:00 am</p>
                                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                                <p className="reply"><a href="post.html#"><i className="fa fa-reply"></i> Reply</a>
                                                </p>
                                            </Col>    
                                        </div>
                                </div>
                                <div className="row comment last">

                                    <div className="text-center-xs"> 
                                        <Col sm={3} md={2}>
                                            <p>
                                                <img src="img/blog-avatar.jpg" className="img-responsive img-circle" alt="" />
                                            </p>
                                        </Col>    
                                    </div>

                                    <div>
                                        <Col sm={9} md={10}>
                                            <h5>Louise Armero</h5>
                                            <p className="posted"><i className="fa fa-clock-o"></i> September 23, 2012 at 12:00 am</p>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                            <p className="reply"><a href="post.html#"><i className="fa fa-reply"></i> Reply</a>
                                            </p>
                                        </Col>    
                                    </div>

                                </div>

                            </div>

                            <div id="comment-form" data-animate="fadeInUp">

                                <h4>Leave comment</h4>

                                <form>
                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name <span className="required">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>
                                    </div>

                                    <div> 
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email <span className="required">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" id="email" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>

                                    <div> 
                                        <Row>
                                            <div> 
                                                <Col sm={12}>
                                                    <div className="form-group">
                                                        <label htmlFor="comment">Comment <span className="required">*</span>
                                                        </label>
                                                        <textarea className="form-control" id="comment" rows="4"></textarea>
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>

                                    <div> 
                                        <Row>
                                            <div className="text-right">
                                                <Col sm={12}>
                                                    <button className="btn btn-primary"><i className="fa fa-comment-o"></i> Post comment</button>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>


                                </form>

                            </div>

                        </div>
                    </Col>    
                </div>

                <div>
                    <BlogSideNav />
                </div>
        </div>
    </div>    
    );
}

export default BlogPost;