import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Global from './styles/global';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Global />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/meal" component={Meal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
