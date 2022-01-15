import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../common.sass';
import './style.sass';
import data from '../content.json';
import PHeading from '../PHeading';

const Contact = ({sectionTitle}) => {
	
	const contact = data.contact;

	return (
		<div className="footer">
			<Row>
				<PHeading level={1} heading={sectionTitle} />
			</Row>
			<Row className="description" style={{margin:"15vh 0"}}>
				<p>{contact.description}</p>
				<p>
				{Object.keys(contact.links).map(ele =>{
					const eleClass = "fa fa-2x fa-"+ele;
					return (<span key={eleClass}>
								<a href={contact.links[ele]} target="_blank" style={{paddingRight:'10px', textDecoration:"none"}}> <i className={eleClass}></i> </a> 
							</span>);
				})} <br /> or email at <a href={"mailto:"+data.email}>{data.email}</a>
				</p>
			</Row>
			
		</div>
	);
}

export default Contact;