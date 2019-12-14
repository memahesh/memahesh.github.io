import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../common.css';
import './About.css';
import data from '../content.json';


const About = (props) => {
	
	const profileUrl = 'assets/images/profile.png';

	return (
		<div id={props.id}>
			<Row>
				<h1>About</h1>
			</Row>
			<Row className="wrapper">
				<Col className="center-div" lg={{ size: 4 }}>
					<img id="profile" src={ profileUrl } alt="Profile" />
				</Col>
				<Col lg={{ size: 8 }}>
					<h2>Hi there 👋 <br /> I'm { data.name }</h2>
					<div dangerouslySetInnerHTML={{ __html: data.about }} />
				</Col>
			</Row>
		</div>
	);
}

export default About;