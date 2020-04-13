import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styles/global.style';

import Header from 'components/header/Header';
import NotFound404 from 'components/NotFound404';
import Intro from 'pages/Intro';
import Detail from 'pages/Detail';
import Search from 'pages/Search';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={window.location.pathname || ''}>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/movie/:queries" component={Intro} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/search/:queries" component={Search} />
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
