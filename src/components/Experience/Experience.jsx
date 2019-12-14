import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Section from '../Section/Section.jsx';
import TextSection from '../TextSection/TextSection.jsx';
import SliderSection from '../SliderSection/SliderSection.jsx';
import './Experience.css';
import '../common.css';
import data from '../content.json';

const Experience = (props) => {
	
	const internships = data.experience.internships;
	const projects = data.experience.projects;
	const education = data.experience.education;
	const competitions = data.experience.competitions;
	const testimonials = data.experience.testimonials;
	const skills = data.experience.skills;

	return (
		<div id={props.id}>
			<Row>
				<h1>Experience</h1>
			</Row>
			<Section
				id = "education"
				section="Education"
				data = {education}
			/>
			<Section
				id = "internships"
				section="Internships"
				data = {internships}
			/>
			<Section
				id = "competitions"
				section="Competitions"
				data = {competitions}
			/>
			<TextSection
				id = "skills"
				section="Skills"
				data = {skills}
			/>
			<SliderSection
				id = "testimonial"
				section="Testimonial"
				data={testimonials}
			/>
		</div>
	);
}

export default Experience;