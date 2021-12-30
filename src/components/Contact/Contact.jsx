import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../common.css';
import './Contact.css';
import data from '../content.json';

const Contact = (props) => {
	
	const contact = data.contact;

	return (
		<div id={props.id} className="footer">
			<Row>
				<h1>Contact</h1>
			</Row>
			<Row className="description">
				<p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
				<p>Let’s make something great together !</p>
				<p>
					<Button color="primary">
						<a href={contact.links['google']} style={{ color:'white' }}>Send me a message</a>
					</Button>
				</p>
				<p>
				{Object.keys(contact.links).map(ele =>{
					const eleClass = "fa fa-2x fa-"+ele;
					return (<span key={eleClass}>
								<a href={contact.links[ele]} target="_blank" style={{paddingRight:'10px', textDecoration:"none"}}> <i className={eleClass}></i> </a> 
							</span>);
				})}
				</p>
			</Row>
			
		</div>
	);
}

export default Contact;