import React from 'react'

import styled from 'styled-components';

//=============================================================================
// Login Component
//=============================================================================

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <form action="">
                    <label for="">Username</label>
                    <input id="text" type="" placeholder />
                    <label for="">Password</label>
                    <input id="text" type="" placeholder />
                </form>
            </div>
        );
    }
}

export default Login
