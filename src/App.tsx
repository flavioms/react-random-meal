import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Favorite from './pages/Favorite';
import Global from './styles/global';
import light from './styles/theme/light';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <Global />
        <ToastContainer position="top-center" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal/:mealId?" component={Meal} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
