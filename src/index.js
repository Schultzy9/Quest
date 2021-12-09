import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route} from 'react-router-dom';

import './styles/global.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Choice from './components/Choice';
import FinalChoice from './components/FinalChoice';
import Challenge from './components/Challenge';
import ChallengeQuest from './pages/ChallengeQuest';
import PuzzleQuest from './pages/PuzzleQuest';


const routes = (
  <Layout>
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/choice/:id' component={Choice} />
      <Route path='/challenge/:id' component={Challenge} />
      <Route exact path='/challenge' component={ChallengeQuest} />
      <Route path='/final/:id' component={FinalChoice} />
      <Route path='/puzzle' component={PuzzleQuest} />
    </Router>
  </Layout>
)

ReactDOM.render(routes, document.getElementById('root'));
