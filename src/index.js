import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import './skeleton.css';
import { injectGlobal } from 'styled-components';
import Bango from './Bango';


injectGlobal`
    body {
        margin: auto;
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

ReactDOM.render(
  <Bango />,
  document.getElementById('root')
);
