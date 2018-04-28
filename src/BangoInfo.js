import React from 'react';
import styled from 'styled-components';


const StyledInfo = styled.div`
    width: 60%;
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
