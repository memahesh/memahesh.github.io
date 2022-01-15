import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../common.sass';
import './style.sass';
import data from '../content.json';
import PHeading from '../PHeading';


const About = ({id, sectionTitle}) => {

	return (
		<Row>
			<PHeading heading={sectionTitle} level={1} />
			<Row className="wrapper">
				<Col className="center-div" lg={{ size: 4 }}>
					<img id="profile" src={ data.profileURL } alt="Profile" />
				</Col>
				<Col lg={{ size: 8 }}>
					<div dangerouslySetInnerHTML={{ __html: data.about }} />
				</Col>
			</Row>
		</Row>
	);
}

export default About;