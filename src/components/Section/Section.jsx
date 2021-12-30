import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Project from '../Project/Project.jsx';
import './Section.css';
import '../common.css';
import PHeading from '../PHeading/PHeading.jsx';



const Section = (props) => {
	
	const items = props.data;

	return (
		<Row className="wrapper" id={ props.id }>
			<Col lg={{ size: 3 }}>
				<PHeading heading={props.section} level={3} />
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