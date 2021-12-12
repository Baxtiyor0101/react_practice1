import React from 'react';
import './signup.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <>
              <div className="signup">
              <h1>Welcome!</h1>
              <p>Sign in to your Account</p>
              <input type="text" placeholder='Your name'  />  <br />
              <input type="text" placeholder='Your Password'  />  <br />
              <h5>PLease full it from the beginning to the end</h5>
              </div>
            </>
        );
    }
}


export default SignUp;
