import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Testimonial from '../Testimonial/Testimonial.jsx';
import Slider from 'react-slick';
import '../common.css';
import './SliderSection.css';
import data from '../content.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderSection = (props) => {
	
	const section = props.data;
	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

	return (
		<Row id={props.id} className="wrapper">
			<Col lg={{ size: 3 }}>
				<h2>{ props.section }</h2>
			</Col>
			<Col lg={{ size: 9 }}>
				<Slider {...settings}>
			        {
						section.map((item, i) =>{
							return <Testimonial 
										key = {i}
										id="1"
										data={ item }
									/>
						})
					}
			      </Slider>
				
			</Col>
		</Row>
	);
}

export default SliderSection;