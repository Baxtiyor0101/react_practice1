import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
               <div className="signin">
                    <h1>Create Account!</h1>
                    <input type="text" placeholder='your Name' /> <br />   
                    <input type="text" placeholder='your Email' />   <br />
                    <input type="text" placeholder='your Password' /><br />
                    <p>Create account with social media</p>   
                </div>                 
            </>
        );
    }
}


export default Signin;
