import React from 'react';
import { Col } from 'react-bootstrap';

function AdvantagesSlider(){
	return(
			<div id="advantages">

				<div className="container">
					<div className="same-height-row">
						<div> 
							<Col sm={4}>
								<div className="box same-height clickable">
									<div className="icon"><i className="fa fa-heart"></i>
									</div>

									<h3><a href="index.html#">We love our customers</a></h3>
									<p>We are known to provide best possible service ever</p>
								</div>
							</Col>	
						</div>

						<div> 
							<Col sm={4}>
								<div className="box same-height clickable">
									<div className="icon"><i className="fa fa-tags"></i>
									</div>

									<h3><a href="index.html#">Best prices</a></h3>
									<p>You can check that the height of the boxes adjust when longer text like this one is used in one of them.</p>
								</div>
							</Col>	
						</div>

						<div>
							<Col sm={4}>
								<div className="box same-height clickable">
									<div className="icon"><i className="fa fa-thumbs-up"></i>
									</div>

									<h3><a href="index.html#">100% satisfaction guaranteed</a></h3>
									<p>Free returns on everything for 3 months. If you can buy them.</p>
								</div>
							</Col>	
						</div>
					</div>
				</div>
			</div>
	);
}

export default AdvantagesSlider;