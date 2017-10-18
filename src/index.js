import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    return (
      <div className="">The Cards Go Here</div>

      )
  }
}

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {value: ''};
  }

  render() {
    return(
      <div>
        <input label="Answer" onChange={this.handleChange} value={this.state.value}></input>
        <button onClick={this.onClick.bind(this)}>Submit</button>
      </div>  
      )
  }

  onClick(e) {
    this.props.checkAnswer(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    
  }
  checkAnswer(i) {
    console.log(i);
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <CardDisplay />
          <AnswerForm checkAnswer={this.checkAnswer}/>
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
