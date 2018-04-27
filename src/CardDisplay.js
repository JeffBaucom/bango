import React from 'react';
import styled from 'styled-components';

class CardDisplay extends React.Component {

  render() {
    // Set the 'th' 'rd' 'st' suffix for card number
    const suffix = (this.props.cardSet === "day of the month")
      ? this.suffix(this.props.card.front) : "";
    return (
      <div className="card-text">
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

export default CardDisplay
