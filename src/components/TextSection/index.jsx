import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './style.sass';
import '../common.sass';
import PHeading from '../PHeading';



const TextSection = ({items, sectionTitle}) => {
	
	return (
		<Row className="wrapper">
			
			<Col lg={{ size: 3 }}>
				<PHeading heading={sectionTitle} level={1} />
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