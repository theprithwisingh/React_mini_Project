// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import MainPage from './MainPage';
import IntroductionPage from './IntroductionPage';
import FeedbackPage from './FeedbackPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/introduction" component={IntroductionPage} />
          <Route path="/feedback" component={FeedbackPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
