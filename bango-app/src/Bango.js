import React from 'react';
import cardData from './cardData.json';
import update from 'react-addons-update';
import styled from 'styled-components';
import { toKana, isRomaji } from 'wanakana';


import Nav from './Nav';
import ScoreLine from './ScoreLine';
import Card from './Card';
import AnswerForm from './AnswerForm';

//=============================================================================
// Root Component
//=============================================================================


const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const GameBoard = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

`


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

    let i = Math.floor(Math.random() * (this.state.deck.length));
    while (this.state.card - 1 === i) {
      i = Math.floor(Math.random() * (this.state.deck.length));
    }

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
        <div>
          <Game>
            <GameBoard>
              <Card card={this.state.card} cardSet={this.state.set}/>
              <AnswerForm value={this.state.input} onChange={this.handleChange} checkAnswer={this.checkAnswer}/>
          </GameBoard>
            <ScoreLine cardCount={this.state.cardCount} score={this.state.score} result={this.state.result}/>
        </Game>
        </div>
    );
  }
}


export default Bango
