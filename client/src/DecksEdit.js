import React from 'react'
import axios from 'axios';
import update from 'immutability-helper';


import CardEdit from './CardEdit';
import styled from 'styled-components';

//=============================================================================
// DecksEdit Component
//=============================================================================

class DecksEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      cardsAdded: false,
      cards: props.deck.cards
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
      cards: this.state.cards
    });
  }

  deleteHandler = (card) => {
    console.log(`${card}`);
  }

  addCard = () => {
    this.setState({
      editing: true,
      cardsAdded: true,
      cards: [...this.state.cards, {cardNumber: this.state.cards.length + 1,translation: '', deckId: this.props.deck.id, newCard: true}]
    });
  }

  createCards = () => {
    let cards = this.state.cards.filter(card => card.newCard);
    let url = `/api/base_decks/${this.props.deck.id}/cardsList`
    axios.post(url, {
      cards : cards
    })
    .then((res) => {
      const decks = res.data;
      console.log(decks);
    });
  }

  handleChange = (cardNumber, event) => {
    let index = cardNumber - 1;
    this.setState({
      editing: true,
      cardsAdded: true,
      cards: update(this.state.cards, {[index]: {translation: {$set: event.target.value }}})
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleEdit}>Edit</button>
        {(this.state.editing) ? 
        (<div>
          Editing
          <form action="">
            <label for="">Title</label>
            <input type="text" defaultValue={this.props.deck.title} />
            { this.state.cards.map(card => <CardEdit handleChange={this.handleChange} deleteCard={this.deleteHandler} card={card} />) }
            <button type="button" onClick={this.addCard}>Add Card</button>
            { this.state.cardsAdded ? <button onClick={this.createCards}>Save Cards</button> : null }

          </form>
        </div>)
        :
        (<div>
          <h5>{this.props.deck.title}</h5>
          Not Editing
        </div>)}
      </div>
    );
  }
}

export default DecksEdit
