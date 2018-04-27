import React from 'react';
import styled from 'styled-components';

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
      <form className="answer-form" onSubmit={this.onClick}>
        <input label="Answer" onChange={this.handleChange} value={value}></input>
        <button type="submit" >Submit</button>
      </form>  
      )
  }

}

export default AnswerForm
