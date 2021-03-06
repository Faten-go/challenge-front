
import React, { useState } from 'react';
        import {
          Collapse,
          Navbar,
          NavbarToggler,
          NavbarBrand,
          Nav,
          NavItem,
          NavLink,
         
         
        } from 'reactstrap';

  const NavBar = (props) => {
          const [isOpen, setIsOpen] = useState(false);
        
          const toggle = () => setIsOpen(!isOpen);
        
          return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Cocktail Bar</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/AboutUs">About us</NavLink>
                    </NavItem> 
                    </Nav>
                </Collapse>
              
              </Navbar>
            </div>
          );
        }
        

export default NavBar;
