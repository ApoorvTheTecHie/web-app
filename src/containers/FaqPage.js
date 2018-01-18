import React from 'react';
import { Col } from 'react-bootstrap';
import PagesSideNav from '../components/PagesSideNav';

const FaqPage = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="faq.html#">Home</a>
                            </li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                </div>
                <PagesSideNav />
                <div> 
                    <Col md={9}>


                        <div className="box" id="contact">
                            <h1>Frequently asked questions</h1>

                            <p className="lead">Are you curious about something? Do you have some kind of problem with our products?</p>
                            <p>Please feel free to contact us, our customer service center is working for you 24/7.</p>

                            <hr />

                            <div className="panel-group" id="accordion">

                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                            <a data-toggle="collapse" data-parent="#accordion" href="/faq">

                            1. What to do if I have still not received the order?

                            </a>

                        </h4>
                                    </div>
                                    <div id="faq1" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                <li>Aliquam tincidunt mauris eu risus.</li>
                                                <li>Vestibulum auctor dapibus neque.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                            <a data-toggle="collapse" data-parent="#accordion" href="/faq">

                            2. What are the postal rates?

                            </a>

                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">

                            <a data-toggle="collapse" data-parent="#accordion" href="/faq">

                            3. Do you send overseas?

                            </a>

                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>    
                </div>
            </div>
        </div>        

    );
}

export default FaqPage;