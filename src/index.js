import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import './index.css';
import cardData from './cardData.json';

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


class CardDisplay extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="">
      {this.props.card.front}
      </div>

      )
  }
}

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const value = this.props.value;
    return(
      <form  onSubmit={this.onClick}>
        <input label="Answer" onChange={this.handleChange} value={value}></input>
        <button type="submit" >Submit</button>
      </form>  
      )
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.checkAnswer();
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
    // this.setState({value: e.target.value});
  }
}

class Game extends React.Component {
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
      deck : cardData.deck
    };
  }
  
  checkAnswer() {
    console.log(this.state.input === this.state.card.answer);
    const i = Math.floor(Math.random() * (this.state.deck.length));
    const newCard = cardData.deck[i];
    var newState = update(this.state, {
      card: {
        front : {$set: i + 1}, 
        answer : {$set : newCard}
      }
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
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
