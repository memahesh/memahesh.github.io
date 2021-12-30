import React, {useState} from 'react';
import Section from '../Section/Section.jsx';
import TextSection from '../TextSection/TextSection.jsx';
import SliderSection from '../SliderSection/SliderSection.jsx';
import './Experience';
import '../common.css';
import data from '../content.json';
import PHeading from '../PHeading/PHeading.jsx';

const Experience = (props) => {
	
	const work = data.experience.work;
	const education = data.experience.education;
	const testimonials = data.experience.testimonials;
	const skills = data.experience.skills;

	return (
		<div id={props.id}>
			<PHeading heading="Experience" level={1} />
			<Section
				id = "worksSection"
				section="Work"
				data = {work}
			/>
			<Section
				id = "educationSection"
				section="Education"
				data = {education}
			/>
			<TextSection
				id = "skillSection"
				section="Skills"
				data = {skills}
			/>
			<SliderSection
				id = "testimonialSection"
				section="Testimonial"
				data={testimonials}
			/>
		</div>
	);
}

export default Experience;