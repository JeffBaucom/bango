import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './normalize.css';
import './skeleton.css';
import './index.css';
import { injectGlobal } from 'styled-components';
import Bango from './Bango';
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

     this.showMenu  = this.showMenu.bind(this);
     this.hideMenu  = this.hideMenu.bind(this);
      this.state = {
         showMenu: false 
      }
  }
    showMenu() {
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    hideMenu() {
        this.setState({showMenu: false}, () => {
            document.removeEventListener('click', this.hideMenu);
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav showMenu={this.state.showMenu} openMenu={this.showMenu} hideMenu={this.hideMenu}></Nav>
                    <Route exact path="/" component={Bango} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render((<App />), document.getElementById('root'));
