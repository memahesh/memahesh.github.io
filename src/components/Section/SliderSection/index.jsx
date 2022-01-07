import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Testimonial from '../../Testimonial';
import Slider from 'react-slick';
import '../../common.sass';
import './style.sass';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PHeading from '../../PHeading';

const SliderSection = ({items, sectionTitle}) => {
	
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
		<Row>
			<Col lg={{ size: 3 }}>
				<PHeading heading={sectionTitle} level={1} />
			</Col>
			<Col lg={{ size: 9 }}>
				<Slider {...settings}>
			        {
						items.map((item, i) =>{
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