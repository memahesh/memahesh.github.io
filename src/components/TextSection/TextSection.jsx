import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Project from '../Project/Project.jsx';
import './TextSection.css';
import '../common.css';



const TextSection = (props) => {
	
	const items = props.data;

	return (
		<Row className="wrapper" id={ props.id }>
			
			<Col lg={{ size: 3 }}>
				<h2>{ props.section }</h2>
			</Col>
			<Col lg={{ size: 9 }}>

			{Object.keys(items).map((item, i) =>{
				return (<Row key={ i }>
							<Col lg={{ size: 4 }}>
								<b>{item}</b>	
							</Col>
							<Col lg={{ size: 8 }}>
								{items[item].map(it => {
									return <Button key={it} color="primary" style={{margin:'5px'}}>{it}</Button>;
								})}
							</Col>
						</Row>);
			})}	
				
			</Col>
		</Row>
	);
}

export default TextSection;