import React, {useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import PfNavbar from './components/PfNavbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import PfFooter from './components/PfFooter';
import SectionLayout from './components/layout/SectionLayout';
import data from "./content.json";

const App = () => {

	useEffect(() => {
		document.title = data.name + " Portfolio";
	}, []);

	return (
		<Container className="App themed-container" fluid="md">
			<PfNavbar />
			<SectionLayout sectionName={"aboutSection"}>
				<About sectionTitle={"About"} />
			</SectionLayout>
			<SectionLayout sectionName={"experienceSection"}>
				<Experience />
			</SectionLayout>
			<SectionLayout sectionName={"contactSection"}>
				<Contact sectionTitle={"Contact"} />
			</SectionLayout>
			<SectionLayout>
				<PfFooter />
			</SectionLayout>
		</Container>
	);
}

export default App;