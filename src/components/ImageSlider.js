import React from 'react';
import { Col } from 'react-bootstrap';

function ImageSlider(props){
	return(
				// {used image instead of slider}		
		            <div className="container">
		                <div>
		                	<Col md={12}>
			                    <img className="modifyImageSlider" src="img/main-slider4.jpg" alt="" />
		                    </Col>	
	                	</div>
	                </div>    
		);
}

export default ImageSlider;