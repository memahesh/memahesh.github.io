import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Testimonial.css';
import '../common.css';

const Testimonial = (props) => {
	

	const data = props.data;

	const imgUrl = 'assets/images/'+data.icon+'.png';

	return (
		<Row id={ props.id } className="small-wrapper">
			<Col md={{ size: 12 }}>
				<i className="fa fa-quote-left fa-2x"></i>
				<p style={{padding:"5px 20px", fontStyle:"italic"}}>{ data.description }</p>
				<i className="fa fa-quote-right fa-2x"></i>
			</Col>
			<Col md={{ size: 12 }}>
				<a href={ data.url } target="_blank" className="signature">
					<img src={ imgUrl } alt={ data.icon } className="img-icon"/>
					{data.person} <br /> {data.designation}
				</a>
			</Col>
		</Row>
	);
}

export default Testimonial;