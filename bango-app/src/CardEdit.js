import React from 'react'

import styled from 'styled-components';

//=============================================================================
// CardEdit Component
//=============================================================================

class CardEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <label for=""> Card {this.props.card.id}</label>
        <input type="text" value={this.props.card.translation} />
      </div>

    );
  }
}
export default CardEdit
