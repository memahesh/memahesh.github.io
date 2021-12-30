import React from "react";
import { Row } from "reactstrap";
import "./PHeading.css";

const PHeading = (props)=> {
    return (
        <Row>
			{
                (function(){
                    switch(props.level){
                        case 1 :
                            return (<h1 className="p-heading-1">{props.heading}</h1>);
                        case 2 :
                            return (<h2 className="p-heading-2">{props.heading}</h2>);
                        case 3 :
                            return (<h3 className="p-heading-3">{props.heading}</h3>);
                        case 4 :
                            return (<h4 className="p-heading-4">{props.heading}</h4>);
                        default :
                            return (<h5 className="p-heading-5">{props.heading}</h5>)
                    }
                })()
            }
		</Row>
    );
}

export default PHeading;