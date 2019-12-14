import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Project from '../Project/Project.jsx';
import './Section.css';
import '../common.css';



const Section = (props) => {
	
	const items = props.data;

	return (
		<Row className="wrapper" id={ props.id }>
			<Col lg={{ size: 3 }}>
				<h2>{ props.section }</h2>
			</Col>
			<Col lg={{ size: 9 }}>

				{
					items.map((item, i) =>{
						return <Project 
									key = {i}
									id="1"
									data={item}
								/>
					})
				}

				
			</Col>
		</Row>
	);
}

export default Section;