import React from 'react'

import styled from 'styled-components';

//=============================================================================
// CardEdit Component
//=============================================================================

class CardEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCard = (card) => {
    console.log(card);
  }

  render() {
    return(
      <div class="row">
        <label for=""> Card {this.props.card.id}</label>
        <input type="text" value={this.props.card.translation} />
        <button type="button" onClick={this.props.deleteCard(this.props.card)}>Delete</button>
      </div>

    );
  }
}
export default CardEdit
