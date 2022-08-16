import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css'; 
import logo  from './Home/logo.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
      
    return (
      <header>
        <Navbar id="headerContainer" className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow " light>
          <Container>
                    <NavbarBrand id="headerText" tag={Link} to="/">

                        <img src={logo} alt="" id="logoNav"/>HHN</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul id="navigationBar" className="navbar-nav flex-grow">
            
                <NavItem>
                                <NavLink tag={Link} className="nav-item text-light " to="/campaign"><i className="fa fa-money p-1 nvItem" aria-hidden="true"></i>Campaigns</NavLink>
                </NavItem>
                 <NavItem>
                                <NavLink tag={Link} className="nav-item text-light" to="/event"><i className="fa fa-calendar p-1 nvItem" aria-hidden="true"></i>Events</NavLink>
                 </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="nav-item text-light" to="/dashboard"><i className="fa fa-tachometer p-1 nvItem" aria-hidden="true"></i>Dashboard</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="btn btn-primary btn-sm text-light" to="/authentication"><i className="fa fa-sign-in p-1" aria-hidden="true"></i>Sign In</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
        );
        let navItem = document.querySelector('.nvItem')
        console.log(navItem) 
  }
}
