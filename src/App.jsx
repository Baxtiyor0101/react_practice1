import React from 'react';
import { Hooks } from './Hooks';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count:0,
        };
    }

    render() {
        return (
            <div style={{flex:1}}>
                <h1>Class</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
                <Hooks count={this.state.count} />
            </div>
        );
    }
}


export default App;