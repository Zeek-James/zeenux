import React, { useState } from 'react';
import {
    // Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    // Nav,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
  } from 'reactstrap';
  
export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar color='dark' dark expand="md" className='mb-5 sticky-top'>
          <NavbarBrand href="/" tag='h1' >ZeenuX</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          {/* <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign up
                  </DropdownItem>
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse> */}
        </Navbar>
    )
}

