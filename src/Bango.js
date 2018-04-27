import React from 'react';
import cardData from './cardData.json';
import update from 'react-addons-update';
import styled from 'styled-components';

import BangoInfo from './BangoInfo';
import CardDisplay from './CardDisplay';
import AnswerForm from './AnswerForm';


class Bango extends React.Component {
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.checkAnswer  = this.checkAnswer.bind(this);
     console.log(cardData);
     this.state = {
      card : {
        front : 1,
        answer : cardData.deck[0]
      },
      input : '',
      set : cardData.set,
      deck : cardData.deck,
      score: 0,
      cardCount: 0
    };
  }
  
  checkAnswer() {
    const answerCheck = (this.state.input === this.state.card.answer);
    const newScore = answerCheck ? this.state.score + 1 : this.state.score - 1;
    
    const i = Math.floor(Math.random() * (this.state.deck.length));
    const newCard = cardData.deck[i];
    var newState = update(this.state, {
      card: {
        front : {$set: i + 1}, 
        answer : {$set : newCard}
      },
      input: {$set: ''},
      score: {$set: newScore},
      result: {$set: answerCheck},
      cardCount: {$set: this.state.cardCount + 1}
    });
    this.setState(newState);
  }

  handleChange(value) {
    this.setState({input: value});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <CardDisplay card={this.state.card} cardSet={this.state.set}/>
          <AnswerForm value={this.state.input} onChange={this.handleChange} checkAnswer={this.checkAnswer}/>
        </div>
        <BangoInfo cardCount={this.state.cardCount} score={this.state.score} result={this.state.result}/>
        </div>
    );
  }
}


export default Bango
