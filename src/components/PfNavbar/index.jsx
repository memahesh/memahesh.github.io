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
import './style.sass';
import data from "../../content.json";

const PfNavbar = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar className="container-sm" color="white" light expand="md" fixed="top">
        <NavbarBrand href="/myfolio">
          {data.name.split(" ").filter(x=>x!=="").map((word, idx) => {
            if(idx%2==0){
              return <span key={idx}>{word[0]}</span>;
            }else{
              return <b key={idx}>{word[0]}</b>;
            }
          })}
        </NavbarBrand>
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
            {
              data.experience.journey && <NavItem>
              <Link
              	activeClass="active"
              	spy={true}
              	smooth={true}
              	duration={500} 
              	offset={-100}
              	className="nav-link"
              	to="journeySection"
              >journey
              </Link>
            </NavItem>
            }
            {
              data?.experience?.skills && <NavItem>
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
            }
            {
              data?.experience?.testimonials && <NavItem>
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
            }
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