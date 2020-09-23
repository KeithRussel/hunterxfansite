import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './chibigon.png';

const HeaderNav = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand href='/'>
            <img
              src={Logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='Hunter X Fan Site'
            />
            <span>Hunter X Fan Site</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/others'>Others</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default HeaderNav;
