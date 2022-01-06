import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../../common.sass';
import './style.sass';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PHeading from '../../PHeading';
import {MdDisabledByDefault, MdFlag, MdOutlineWork, MdSchool} from "react-icons/md";
import VerticalTimeline from 'react-vertical-timeline-component/dist-modules/VerticalTimeline';
import VerticalTimelineElement from 'react-vertical-timeline-component/dist-modules/VerticalTimelineElement';
import './style.sass';
import { DefaultContext } from 'react-icons/lib';

const TimelineSection = ({items, sectionTitle}) => {

	const colorEntries = [

	];

	return (
		<Row className="wrapper">
			<Col lg={{ size: 12 }}>
				<PHeading heading={sectionTitle} level={1} />
			</Col>
			<Col lg={{ size: 12 }}>
				<VerticalTimeline layout={'1-column-left'}>
					{
						items.map((item, idx) => {
							return (
								<CustomCardVerticalTimelineElement 
									key={idx}
									elementData={item}
									cardStyleProps={getCardStyling(item.type)}
								/>
							);
						})
					}
				</VerticalTimeline>
			</Col>
		</Row>
	);
}

const getCardStyling = (cardType) => {
	
	switch(cardType){
		case "work":
			return WorkCard();
		case "education":
			return EducationCard();
		case "competition":
			return CompetitionCard();
		default:
			return DefaultCard();
	}
}

const CustomCardVerticalTimelineElement = ({elementData, cardStyleProps}) => {

	return (
		<VerticalTimelineElement
				date={elementData.duration}
				{...cardStyleProps}
			>
				<Row>
					<div>
						<a href={elementData.url} target={"_blank"}>
							<img src={elementData.imgURL} alt={elementData.name} className='timeline-element-image' />
						</a>
					</div>
					<div>
						<PHeading heading={elementData.designation} level={4} />
						<a href={elementData.url} className='no-style-link' target={"_blank"}>{elementData.name}</a>
						<p dangerouslySetInnerHTML={{__html:elementData.description}}></p>
					</div>
				</Row>
			</VerticalTimelineElement>
	);
}

const WorkCard = () => {
	const baseColor = "rgb(33, 150, 243)";
	return {
		contentStyle: { border: `3px dashed ${baseColor}`, color: '#000' },
		contentArrowStyle: { borderRight: `7px solid ${baseColor}` },
		iconStyle: { background: `${baseColor}`, color: '#fff' },
		icon : <MdOutlineWork />
	};
}

const EducationCard = () => {
	const baseColor = "rgb(243, 50, 33)";
	return {
		contentStyle: { border: `3px dashed ${baseColor}`, color: '#000' },
		contentArrowStyle: { borderRight: `7px solid ${baseColor}` },
		iconStyle: { background: `${baseColor}`, color: '#fff' },
		icon : <MdSchool />
	};
}

const CompetitionCard = () => {
	const baseColor = "rgb(243, 150, 33)";
	return {
		contentStyle: { border: `3px dashed ${baseColor}`, color: '#000' },
		contentArrowStyle: { borderRight: `7px solid ${baseColor}` },
		iconStyle: { background: `${baseColor}`, color: '#fff' },
		icon : <MdFlag />
	};
}

const DefaultCard = () => {
	return {
		contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
		contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
		iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
		icon : <MdDisabledByDefault />
	}
}

export default TimelineSection;