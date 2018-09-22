import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './normalize.css';
import './skeleton.css';
import './index.css';
import { injectGlobal } from 'styled-components';
import Bango from './Bango';
import Login from './Login';
import Decks from './Decks';

import Nav from './Nav';


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
class App extends React.Component {
  constructor(props) {
     super(props);

     this.menuClick  = this.menuClick.bind(this);
      this.state = {
         showMenu: false 
      }
  }
    menuClick() {
        if (this.state.showMenu) {
            this.setState({showMenu: false});
        } else {
            this.setState({showMenu: true}, () => {
                document.body.addEventListener('click', () => {this.setState({showMenu: false})});
            });
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav showMenu={this.state.showMenu} menuClick={this.menuClick}></Nav>
                    <Route exact path="/" component={Bango} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/decks" component={Decks} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render((<App />), document.getElementById('root'));
