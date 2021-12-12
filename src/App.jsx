import React from 'react';
import Signin from './Signin';
import SignUp from './SignUp';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:true
        };
    }


     render() {
        const getSave = () =>{
            this.setState({active: !this.state.active})
            }
            // console.log(this.state.active);
        return (
            <div>
               

               {
                   this.state.active?
                    <SignUp />
                   : <Signin />
                }
                 <button onClick={getSave} >{this.state.active? 'Sign in':'Sign up'}</button>

                
             </div>
        );
    }
}


export default App;
