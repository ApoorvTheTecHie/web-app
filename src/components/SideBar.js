import React from 'react';
import { Col } from 'react-bootstrap';
import BannerImage from './BannerImage';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return(
                <div>     
                    <Col md={3}>
                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Categories</h3>
                            </div>

                            <div className="panel-body">
                                <ul className="nav nav-pills nav-stacked category-menu">
                                    <li>
                                        <Link to="/product">Men <span className="badge pull-right">42</span></Link>
                                        <ul>
                                            <li><Link to="/product">T-shirts</Link>
                                            </li>
                                            <li><Link to="/product">Shirts</Link>
                                            </li>
                                            <li><Link to="/product">Pants</Link>
                                            </li>
                                            <li><Link to="/product">Accessories</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active">
                                        <Link to="/product">Ladies  <span className="badge pull-right">123</span></Link>
                                        <ul>
                                            <li><Link to="/product">T-shirts</Link>
                                            </li>
                                            <li><Link to="/product">Skirts</Link>
                                            </li>
                                            <li><Link to="/product">Pants</Link>
                                            </li>
                                            <li><Link to="/product">Accessories</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/product">Kids  <span className="badge pull-right">11</span></Link>
                                        <ul>
                                            <li><Link to="/product">T-shirts</Link>
                                            </li>
                                            <li><Link to="/product">Skirts</Link>
                                            </li>
                                            <li><Link to="/product">Pants</Link>
                                            </li>
                                            <li><Link to="/product">Accessories</Link>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Brands <Link className="btn btn-xs btn-danger pull-right" to="/product#"><i className="fa fa-times-circle"></i> Clear</Link></h3>
                            </div>

                            <div className="panel-body">

                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Armani (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Versace (12)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Carlo Bruni (15)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Jack Honey (14)
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>

                                </form>

                            </div>
                        </div>

                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Colours <Link className="btn btn-xs btn-danger pull-right" to="/product#"><i className="fa fa-times-circle"></i> Clear</Link></h3>
                            </div>

                            <div className="panel-body">

                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour white"></span> White (14)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour blue"></span> Blue (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour green"></span> Green (20)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour yellow"></span> Yellow (13)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour red"></span> Red (10)
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>

                                </form>

                            </div>
                        </div>
                        <BannerImage />
                    </Col>    
            </div>       
    );
}

export default SideBar;