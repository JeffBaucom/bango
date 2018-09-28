import React from 'react'
import axios from 'axios';

import DecksEdit from './DecksEdit';

import styled from 'styled-components';

//=============================================================================
// Decks Component
//=============================================================================

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: []
    }
  }


  componentDidMount() {
    axios.get('/api/base_decks')
      .then((res) => {
        const decks = res.data;
        this.setState({decks});
      });
  }
  

  render() {
    return(
      <div>
        <h3>Manage Decks</h3>
        <div>
          { this.state.decks.map(deck => <DecksEdit deck={deck}/>) }
        </div>
      </div>
    );
  }
}

export default Decks
