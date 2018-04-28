import React from 'react';
import cardData from './cardData.json';
import update from 'react-addons-update';
import styled from 'styled-components';

import BangoInfo from './BangoInfo';
import CardDisplay from './CardDisplay';
import AnswerForm from './AnswerForm';

const StyledNav = styled.div`
    overflow: hidden;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #B9BAA3;
    margin-bottom: 1rem;

    a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    h1 {
        margin: 0;
        font-weight: 600;
    }
`

const Game = styled.div`
    display: flex;
    flex-direction: column;
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
        <div>
            <StyledNav>
                <h1>番号</h1>
            </StyledNav>
          <Game>
            <div className="game-board">
              <CardDisplay card={this.state.card} cardSet={this.state.set}/>
              <AnswerForm value={this.state.input} onChange={this.handleChange} checkAnswer={this.checkAnswer}/>
            </div>
            <BangoInfo cardCount={this.state.cardCount} score={this.state.score} result={this.state.result}/>
        </Game>
        </div>
    );
  }
}


export default Bango
