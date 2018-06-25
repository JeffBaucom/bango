import React from 'react';
import { Route, Link } from 'react-router-dom';
import Bango from './Bango'

import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCaret from '@fortawesome/fontawesome-free-solid/faCaretDown';

//=============================================================================
// Nav Component
// Renders Top Nav Bar
//=============================================================================

const StyledNav = styled.div`
    overflow: hidden;
    color: white;
    padding: 0px 1.5rem;
    max-width: 100%;
    background-color: #FEC4D0;
    border-bottom: 1px solid #B9BAA3;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    h1 {
        margin: 0.5rem 0;
        font-weight: 600;
        text-shadow:0px 0px 0 rgb(184, 216, 217),1px 1px 0 rgb(184, 216, 217),2px 2px 0 rgb(184, 216, 217),3px 3px 0 rgb(184, 216, 217),4px 4px 0 rgb(184, 216, 217),5px 5px 0 rgb(184, 216, 217),6px 6px 0 rgb(184, 216, 217);
    }
    svg {
        padding: .5rem;
    }
`


const Title = styled.span`
    text-shadow: none;
    color: #323631;
    font-weight: 400;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    position: fixed;
    margin-top: -1rem;
    border-radius: 0px;
    box-shadow: 0px 2px 2px gray;

    button {
        width: 100%;
        padding: 0.5rem;
        color: #323631;
        border: none;
        margin: 0.5rem 0;
        font-size: 1.5rem;
    }

    button:hover {
        background-color: lightgray;
    }
`


class Nav extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        this.setState({showMenu: !this.state.showMenu});
    }

    render() {
        return (
            <div>
            <StyledNav>
                <h1>番号  <Title>bango</Title></h1>
                { this.props.showMenu ? (
                    <FontAwesomeIcon icon={faCaret} size="lg" onClick={this.props.hideMenu} transform={{ rotate: 180 }}/>
                    ) : (
                    <FontAwesomeIcon icon={faCaret} size="lg" onClick={this.props.openMenu}/>
                )}
            </StyledNav>
                {
                this.props.showMenu 
                ? (
                <Menu>
                    <button><Link to="/">Study</Link></button>
                </Menu>
                ) : (null)
                }
            </div>
        )
    }
}

export default Nav
