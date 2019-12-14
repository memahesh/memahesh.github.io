import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../common.css';
import './PfFooter.css';
import data from '../content.json';

const PfFooter = (props) => {
	
	const contact = data.contact;

	return (
		<div id={props.id} style={{textAlign: 'right', padding:'40px'}}>
			Build your own website <a href="https://github.com/memahesh.github.io" target="_blank"> here </a>.
			Built using React by <a href="https://github.com/memahesh.github.io" target="_blank"> Mahesh Medam </a>
		</div>
	);
}

export default PfFooter;