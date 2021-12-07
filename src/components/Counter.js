// import { useState } from "react";

// export default function Counter(){
//     const [count, setCount] = useState(0)

//     function inc(){
//         setCount(count+1)
//     }
//     function dec(){
//         setCount(count-1)
//     }

//     return(
//         <>
//           <h3>Count: {count}</h3>
//                 <button
//                     onClick={inc}
//                     className="btn btn-success">INCR</button>
//                 <button
//                     onClick={dec}
//                     className="btn btn-danger">DECR</button>
                
//         </>
//     )
// }

import React from 'react';

class Counter extends React.Component{
   constructor(props){
       super(props);
       this.state={
           count:0
       }
       this.increment=this.increment.bind(this)
       this.decrement=this.decrement.bind(this)
   }
increment(){
    this.setState({count: this.state.count+1})
}
decrement(){
    this.setState({count: this.state.count-1})
}
   render(){
       return(
           <>
             <h4>Count: {this.state.count}</h4>
             <button onClick={this.increment} className="btn btn-success">
                 INCR
             </button>
             <button onClick={this.decrement} className="btn btn-success">
                 DECR
             </button>
           </>
       )
   }
}
