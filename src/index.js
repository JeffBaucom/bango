import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
//import './skeleton.css';
import { injectGlobal } from 'styled-components';
import Bango from './Bango';


injectGlobal`
    body {
        margin: auto;
        background-color: #F7F4EA;
        width: 50%;
        padding: 10px;
        text-align: center;
        font-family: Open-Sans, sans-serif;
    }
`

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
