import React from 'react';
import { Row } from "reactstrap";
import './style.sass';

const SectionLayout = ({children, sectionName}) => {
    return (
        <Row className="wrapper section" id={sectionName}>
            {children}
        </Row>
    );
}

export default SectionLayout;