import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Index2 from './components/index2';
import InfoCard from './components/infoCard';
import InfoPlanets from './components/infoPlanets';
import injectContext from './store/appContext';
import './App.css';

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>        
          <Route exact path="/" component={Index2} />
          <Route exact path="/infocard/:id" component={InfoCard} />
          <Route exact path="/infoplanets/:id" component={InfoPlanets} />
        </Switch>       
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default injectContext(App);
