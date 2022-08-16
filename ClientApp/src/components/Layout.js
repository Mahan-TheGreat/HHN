import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from './Home/Footer';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
     
          {this.props.children}
       
      </div>
    );
  }
}
