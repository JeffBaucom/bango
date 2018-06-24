import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './normalize.css';
import './skeleton.css';
import './index.css';
import { injectGlobal } from 'styled-components';
import Bango from './Bango';


injectGlobal`
    body {
        margin: auto;
        max-width: 100%;
        background-color: #FFFEEF;
        text-align: center;
        color: #323631;
    }

    button {
        border-radius: 3px;
        padding: 0px;
        margin: 0px;
    }
`;

/*
  Game Structure
  Screens/Components:
  -FlashCards
  -Controls
  -Score
  -Navigation
  -Settings

  Data Flow:
  -FlashCard chosen from the deck(static JSON doc)
  -answer intered in Controls
  -answer checked with deck
  -score updated
  -choose next FlashCards
 */



// ========================================

ReactDOM.render((
    <Router>
        <Bango />
    </Router>
    ), document.getElementById('root'));
