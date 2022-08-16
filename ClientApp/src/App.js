import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';

import './custom.css'

import Campaign from './components/Campaign/Campaign';
import cardDetails from './components/Campaign/cardDetails';
import Events from './components/Events/Event';
import EventDetails from './components/Events/EventDetails';
import AuthenticationCard from './components/Authentication/AuthenticationCard';
import { Dashboard } from './components/Dashboard/Dashboard';
import Careers from './components/NewFolder1/Careers';
import JoinUs from './components/NewFolder1/JoinUs';
import About from './components/NewFolder1/AboutUs';
import Gallery from './components/NewFolder1/Gallery';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/campaign' component={Campaign} />
            <Route path='/event' component={Events} />
            <Route path='/authentication' component={AuthenticationCard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/detailsCampaign' component={cardDetails} />
            <Route path='/detailsEvent' component={EventDetails} />
            <Route path='/careers' component={Careers} />
            <Route path='/joinus' component={JoinUs} />
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />

      </Layout>
    );
  }
}
