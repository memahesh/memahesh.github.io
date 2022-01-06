import React from "react";
import { Row } from "reactstrap";
import "./style.sass";

const PHeading = ({level, heading})=> {
    return (
        <Row>
			{
                (function(){
                    switch(level){
                        case 1 :
                            return (<h1 className="p-heading-1">{heading}</h1>);
                        case 2 :
                            return (<h2 className="p-heading-2">{heading}</h2>);
                        case 3 :
                            return (<h3 className="p-heading-3">{heading}</h3>);
                        case 4 :
                            return (<h4 className="p-heading-4">{heading}</h4>);
                        default :
                            return (<h5 className="p-heading-5">{heading}</h5>)
                    }
                })()
            }
		</Row>
    );
}

export default PHeading;