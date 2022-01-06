import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.sass';
import '../common.sass';

const Testimonial = (props) => {
	

	const data = props.data;

	return (
		<Row id={ props.id } className="small-wrapper">
			<Col md={{ size: 12 }} style={{height:"200px"}}>
				<i className="fa fa-quote-left fa-2x"></i>
				<p style={{padding:"5px 20px", fontStyle:"italic"}}>{ data.description }</p>
				<i className="fa fa-quote-right fa-2x"></i>
			</Col>
			<Col md={{ size: 12 }}>
				<Row>
					<Col xs={{offset:5, size:1}} >
						<a href={ data.url } target="_blank" className="signature">
							<img src={ data.imgURL } alt={ data.person } className="img-icon"/>
						</a>
					</Col>
					<Col xs={{size:6}} style={{paddingLeft:"30px"}}>
						<p>{data.person}<br />{data.designation}</p>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Testimonial;