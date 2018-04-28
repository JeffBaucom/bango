import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border-radius: 5px;
    background-color: #fefefe;
    border-style: solid;
    box-shadow: none;
    border: 2px solid #323631;
    color: #323631;
    padding: 1.05rem;
    margin: 0.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    height: 10%;
    width: 60%;
`

const StyledButton = styled.button`
    border-radius: 3px;
    height: 10%
    background-color: transparent;
    border-style: solid;
    box-shadow: none;
    border: 2px solid #323631;
    color: #323631;
    font-weight: 700;
    margin: 0.5rem 1.5rem;
    font-size: 1.4rem;
    padding: 0 1rem;
`

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    max-width: 90%;
    text-align: center;
`

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
      <StyledForm className="answer-form" onSubmit={this.onClick}>
        <StyledInput label="Answer" onChange={this.handleChange} value={value}></StyledInput>
        <StyledButton type="submit" >Submit</StyledButton>
      </StyledForm>  
      )
  }

}

export default AnswerForm
