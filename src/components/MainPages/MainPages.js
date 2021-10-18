import React from 'react';
import Header from '../Header/Header';

import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import ServiceDetails from '../serviceDetails/ServiceDetails';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const MainPages = () => {
  return (
    <div>
      <Header> </Header>
      <Home></Home>
      <Switch>
        {/* <Route exact path="">
          <Home> </Home>{' '}
        </Route> */}
        {/* <Route exact path="/home">
          <Home></Home>
        </Route> */}
        <Route exact path="/services">
          {' '}
          <Services> </Services>
        </Route>
        <Route exact path="/contact">
          {' '}
          <Contact> </Contact>{' '}
        </Route>
        <Route exact path="/about">
          {' '}
          <About> </About>{' '}
        </Route>
        <Route exact path="/home/service:_id">
          <ServiceDetails></ServiceDetails>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default MainPages;
