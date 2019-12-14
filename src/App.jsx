import React, {useState} from 'react';
import { Container } from 'reactstrap';
import PfNavbar from './components/PfNavbar/PfNavbar.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import PfFooter from './components/PfFooter/PfFooter.jsx';


const App = () => {

	return (
		<Container className="App themed-container" fluid="sm">
			<PfNavbar />
			<About 
				id="aboutSection"/>
			<Experience 
				id="experienceSection"/>
			<Contact 
				id="contactSection"/>
			<PfFooter />
		</Container>
	);
}

export default App;