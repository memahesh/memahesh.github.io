import React from 'react';
import { Row } from "reactstrap";

const SectionLayout = ({children, sectionName}) => {
    return (
        <Row className="wrapper" id={sectionName}>
            {children}
        </Row>
    );
}

export default SectionLayout;