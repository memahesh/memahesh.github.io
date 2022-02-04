import React, {useState} from 'react';
import Section from '../Section';
import TextSection from '../TextSection';
import SliderSection from '../Section/SliderSection';
import PortfolioSection from '../Section/PortfolioSection';
import '../common.sass';
import data from '../../content.json';
import SectionLayout from '../layout/SectionLayout';
import TimelineSection from '../Section/TimelineSection';

const Experience = (props) => {

	return (
		<div id={props.id}>
			{
				data?.experience?.journey && <SectionLayout sectionName={"journeySection"}>
				<TimelineSection items={data?.experience?.journey} sectionTitle={"Journey"}/>
			</SectionLayout>
			}
			{
				data?.experience?.skills && <SectionLayout sectionName={"skillSection"}>
				<TextSection items={data?.experience?.skills} sectionTitle={"Skills"}/>
			</SectionLayout>
			}
			{
				data?.experience?.testimonials && <SectionLayout sectionName={"testimonialSection"}>
				<SliderSection
					sectionTitle="Testimonial"
					items={data?.experience?.testimonials}
				/>
			</SectionLayout>
			}
		</div>
	);
}

export default Experience;