import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Project from '../Project';
import './style.sass';
import '../common.sass';
import PHeading from '../PHeading';



const Section = ({sectionTitle, items}) => {
	
	return (
		<Row className="wrapper">
			<Col lg={{ size: 3 }}>
				<PHeading heading={sectionTitle} level={2} />
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