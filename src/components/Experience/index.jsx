import React, {useState} from 'react';
import Section from '../Section';
import TextSection from '../TextSection';
import SliderSection from '../Section/SliderSection';
import PortfolioSection from '../Section/PortfolioSection';
import '../common.sass';
import data from '../content.json';
import PHeading from '../PHeading';
import SectionLayout from '../layout/SectionLayout';
import TimelineSection from '../Section/TimelineSection';
import Testimonial from '../Testimonial';

const Experience = (props) => {
	
	const education = data.experience.journey;
	const testimonials = data.experience.testimonials;
	const skills = data.experience.skills;

	return (
		<div id={props.id}>
			<SectionLayout sectionName={"journeySection"}>
				<TimelineSection items={education} sectionTitle={"Journey"}/>
			</SectionLayout>
			<SectionLayout sectionName={"skillSection"}>
				<TextSection items={skills} sectionTitle={"Skills"}/>
			</SectionLayout>
			<SectionLayout sectionName={"testimonialSection"}>
				<SliderSection
					sectionTitle="Testimonial"
					items={testimonials}
				/>
			</SectionLayout>
		</div>
	);
}

export default Experience;