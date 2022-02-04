import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../common.sass';
import './style.sass';
import data from '../../content.json';

const PfFooter = (props) => {
	
	const contact = data.contact;

	return (
		<div id={props.id} style={{textAlign: 'right', padding:'40px'}}>
			Build your own website <a href="https://github.com/memahesh/myfolio" target="_blank"> here </a>.
			Built using React by <a href="https://www.linkedin.com/in/mahesh-medam-086b27102" target="_blank"> Mahesh Medam </a>
		</div>
	);
}

export default PfFooter;