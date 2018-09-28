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
        <label for=""> Card {this.props.card.cardNumber}</label>
        {(this.props.card.newCard) ? 
        ( <input type="text" defaultValue={this.props.card.translation} onChange={(e) => this.props.handleChange(this.props.card.cardNumber, e)}/>) 
        :
        ( <input type="text" value={this.props.card.translation} />)}
        <button type="button" onClick={this.props.deleteCard(this.props.card)}>Delete</button>
      </div>

    );
  }
}
export default CardEdit
