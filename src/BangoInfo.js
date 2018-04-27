import React from 'react';
import styled from 'styled-components';

class BangoInfo extends React.Component {

    render() {
        return (
          <div>
          <div className="score-line">Score: {this.props.score}</div>
          {this.props.cardCount
              ? (<div className={` result ${this.props.result ? "result-correct" : "result-incorrect"}`}> 
                  { this.props.result ? "Correct!" : "Incorrect :(" } </div>) : (<div></div>)}
          <ol>{/* TODO */}</ol>
          </div>
        );
        
    }
}

export default BangoInfo
