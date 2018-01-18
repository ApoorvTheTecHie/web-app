import React from 'react';
import { Col } from 'react-bootstrap';
import BannerImage from './BannerImage';
import {Link} from 'react-router-dom';


const PagesSideNav = () => {
    return(
        <div> 
            <Col md={3}>

                    <div className="panel panel-default sidebar-menu">

                        <div className="panel-heading">
                            <h3 className="panel-title">Pages</h3>
                        </div>

                        <div className="panel-body">
                            <ul className="nav nav-pills nav-stacked">
                                <li>
                                    <Link to="/text">Text page</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact page</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <BannerImage />
                </Col>    
            </div>        

    );
}

export default PagesSideNav;