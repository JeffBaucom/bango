import React from 'react'

import CardEdit from './CardEdit';
import styled from 'styled-components';

//=============================================================================
// DecksEdit Component
//=============================================================================

class DecksEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing});
  }

  deleteHandler = (card) => {
    console.log(`${card}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleEdit}>Edit</button>
        {(this.state.editing) ? 
        (<div>
          Editing
          <form action="">
            <label for="">Title</label>
            <input type="text" value={this.props.deck.title} />
            { this.props.deck.cards.map(card => <CardEdit deleteCard={this.deleteHandler} card={card} />) }
            <button>Update</button>
          </form>
        </div>)
        :
        (<div>
          <h5>{this.props.deck.title}</h5>
          Not Editing
        </div>)}
      </div>
    );
  }
}

export default DecksEdit
