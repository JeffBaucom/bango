import React from 'react'

import styled from 'styled-components';

//=============================================================================
// Login Component
//=============================================================================

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

const StyledDiv = styled.div`
    text-align: left;
    margin: 0 10%;
`

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledDiv class="row">
                <form action="" class="one-half column">
                    <h3>Login</h3>
                    <label for="">Username</label>
                    <StyledInput id="text" type="" />
                    <label for="">Password</label>
                    <StyledInput id="text" type="" />
                </form>
                <form action="" class="one-half column">
                    <h3>Register</h3>
                    <label for="">Username</label>
                    <StyledInput id="text" type="" />
                    <label for="">Email</label>
                    <StyledInput id="text" type="" />
                    <label for="">Password</label>
                    <StyledInput id="text" type="" />
                    <label for="">Confirm Password</label>
                    <StyledInput id="text" type="" />
                </form>
            </StyledDiv>
        );
    }
}

export default Login
