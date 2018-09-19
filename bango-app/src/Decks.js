import React from 'react'
import axios from 'axios';

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
        <h3>Placeholder for Decks Page</h3>
        <ul>
          { this.state.decks.map(deck => <li>{deck.title}</li>) }
        </ul>
      </div>
    );
  }
}

export default Decks
