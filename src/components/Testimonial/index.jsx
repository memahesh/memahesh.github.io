import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.sass';
import '../common.sass';

const Testimonial = (props) => {
	

	const data = props.data;

	const maxTestimonialLength = 400;

	return (
		<Row id={ props.id } className="small-wrapper">
			<Col md={{ size: 12 }} className={"vertical-center-container"} >
				<div className={"vertical-center-content"}>
				  	<i className="fa fa-quote-left fa-2x p-2"></i>
					<p style={{padding:"5px 20px", fontStyle:"italic"}}>
						{data.description.substring(0, maxTestimonialLength)}{data.description.length>maxTestimonialLength?"...":""}
						<br />
						- {data.person}, {data.designation}
					</p>
					<i className="fa fa-quote-right fa-2x p-2"></i>
				</div>
			</Col>
		</Row>
	);
}

export default Testimonial;