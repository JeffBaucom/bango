import React from 'react';

import styled from 'styled-components';

//=============================================================================
// Card Component
// Renders Flashcards
//=============================================================================

const CardText = styled.div`
    border-radius: 0.3rem;
    width: 80%;
    height: 50%;
    font-size: 3.5rem;
    font-weight: 600;
    color: #323631;
    margin: 0.2rem auto;
    padding: 2rem;
    background-color: #B8D8D8;

`

class Card extends React.Component {


  render() {
    // Set the 'th' 'rd' 'st' suffix for card number
    const suffix = (this.props.cardSet === "day of the month")
      ? this.suffix(this.props.card) : "";
    return (
      <CardText>
        {this.props.card + suffix + " " + this.props.cardSet}
      </CardText>

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

export default Card
