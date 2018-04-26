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

  render() {
    // Set the 'th' 'rd' 'st' suffix for card number
    const suffix = (this.props.cardSet === "day of the month")
      ? this.suffix(this.props.card.front) : "";
    return (
      <div className="">
      {this.props.card.front + suffix + " " + this.props.cardSet}
      </div>

      )
  }

  suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
  }
}

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this);
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

  render() {
    const value = this.props.value;
    return(
      <form  onSubmit={this.onClick}>
        <input label="Answer" onChange={this.handleChange} value={value}></input>
        <button type="submit" >Submit</button>
      </form>  
      )
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
        <div className="game-info">
          <div>Score: {this.state.score}</div>
          <div>{this.state.cardCount ? (<div>{ this.state.result ? "Correct!" : "Incorrect :(" }</div>) : (<div></div>)}</div>
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
