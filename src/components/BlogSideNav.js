import React from 'react';
import { } from 'react-bootstrap';
import BannerImage from './BannerImage';

const BlogSideNav = () => {
    return(
        <div className="col-md-3">
            <div className="panel panel-default sidebar-menu">

                <div className="panel-heading">
                <h3 className="panel-title">Blog</h3>
                </div>

                <div className="panel-body">

                    <ul className="nav nav-pills nav-stacked">
                        <li>
                        <a href="blog.html">About us</a>
                        </li>
                        <li className="active">
                        <a href="blog.html">Fashion</a>
                        </li>
                        <li>
                        <a href="blog.html">News and gossip</a>
                        </li>
                        <li>
                        <a href="blog.html">Design</a>
                        </li>
                    </ul>
                </div>
            </div>
            <BannerImage />
        </div>    
    );
}

export default BlogSideNav;