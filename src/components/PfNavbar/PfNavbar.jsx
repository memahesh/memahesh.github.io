import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent,
} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './PfNavbar.css';
import data from "../content.json";

const PfNavbar = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar className="container-sm" color="white" light expand="md" fixed="top">
        <NavbarBrand href="/">M<b>M</b></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500}
              	offset={-100} 
              	className="nav-link"
              	to="aboutSection"
              >about
              </Link>
            </NavItem>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500} 
              	offset={-100}
              	className="nav-link"
              	to="worksSection"
              >works
              </Link>
            </NavItem>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500} 
              	offset={-100}
              	className="nav-link"
              	to="educationSection"
              >education
              </Link>
            </NavItem>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500} 
              	offset={-100}
              	className="nav-link"
              	to="skillSection"
              >skills
              </Link>
            </NavItem>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500} 
              	offset={-100}
              	className="nav-link"
              	to="testimonialSection"
              >testimonials
              </Link>
            </NavItem>
            <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500}
              	offset={-100} 
              	className="nav-link"
              	to="contactSection"
              >contact
              </Link>
            </NavItem>
            <NavItem>
              <NavLink className="resume" href={data.resumeURL} target="_blank">resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
		</div>
	);

}

export default PfNavbar;