import React from 'react';
import { Link } from 'react-router-dom';

const BannerImage = () => {
    return (
        <div className="banner">
            <Link to="/blog">
                <img src="img/banner.jpg" alt="sales 2014" className="img-responsive" />
            </Link>
        </div>
    );
}

export default BannerImage;