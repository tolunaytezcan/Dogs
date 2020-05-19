import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
//import navs from "./navs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      style={{
        fontWeight: "bold",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "1.2rem",
      }}
    >
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/*                        {
                            navs.map((route) => {
                                return <NavItem key={route.path}>
                                    <NavLink>
                                        <Link to={route.path}>
                                            {route.title}
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            })
                        }*/}
            <NavItem>
              <NavLink>
                <Link to="/">HomePage</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/About-us">About us</Link>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Breeds
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/tur/golden-retriever">Goldens</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/tur/cavalier-king-charles-spaniel">Cavalier</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/tur/chihuahua">Chihuahua</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/tur/shepherd">Shepherd</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/tur/others">Others</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

/* <NavItem>
              <NavLink>
                <Link to="/tur/golden-retriever">Goldens</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tur/cavalier-king-charles-spaniel">Cavalier</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tur/chihuahua">Chihuahua</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tur/shepherd">Shepherd</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tur/others">Others</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tur">Turler</Link>
              </NavLink>
            </NavItem>
            */
