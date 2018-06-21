import React from 'react';
import styled from 'styled-components';

//=============================================================================
// Score Line Component
// Renders correct/incorrect status line and player's score
//=============================================================================

const StyledInfo = styled.div`
    min-width: 50%;
    max-width: 4rem;
`

class BangoInfo extends React.Component {

    render() {
        return (
          <StyledInfo>
          <div className="score-line">Score: {this.props.score}</div>
          {this.props.cardCount
              ? (<div className={` result ${this.props.result ? "result-correct" : "result-incorrect"}`}> 
                  { this.props.result ? "Correct!" : "Incorrect :(" } </div>) : (<div></div>)}
          <ol>{/* TODO */}</ol>
          </StyledInfo>
        );
        
    }
}

export default BangoInfo
