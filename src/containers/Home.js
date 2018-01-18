//File Name: Home.js
//Path: src/containers/
//Description: This file is used as a container for gig'n home page.
import React, { Component } from 'react';
import {
	Row, 
	Col,
	Grid,
	Button,
	Image,
	ButtonGroup
} from 'react-bootstrap';
import ImageSlider from '../components/ImageSlider';
import AdvantagesSlider from '../components/AdvantagesSlider';
import WeekSlider from '../components/WeekSlider';
import GetInspired from '../components/GetInspired';
import FromOurBlog from '../components/FromOurBlog';
import { Link } from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {push} from 'react-router-redux';

export default class Home extends Component {

	render() {
		return(
				<div id="content">
					<ImageSlider />
					<AdvantagesSlider />	
					<WeekSlider />
					<GetInspired />
					<FromOurBlog />
			</div>	
		);
	}
}