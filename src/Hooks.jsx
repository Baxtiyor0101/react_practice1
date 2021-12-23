import React, {useState, useEffect} from "react";

const Hooks = (props) =>{
    const [count ,setCount]=useState(props.count) 
    const [state, setState] = useState([
        {id:1, name:'Baxtiyor 0' , surname:"Kino"},
        {id:1, name:'Baxtiyor 1' , surname:"Kino"},
        {id:1, name:'Baxtiyor 2' , surname:"Kino"},
        {id:1, name:'Baxtiyor 3' , surname:"Kino"},
    ])
    const [active, setActiv] = useState(null);

//     useEffect(() => {
//          console.log("useeffect");
//     } )
//     useEffect(() => {
//         <h1>hellleellleel</h1>
//    }, [] )
   useEffect(() => {
  if(active)  alert(active);
},  [active])

useEffect(() => {
    console.log(props.count);
    setCount(props.count)
  },  [props.count])




    return <div style={{flex:1}}>
        <h1>Hooks</h1>
        <h1>Class {count}</h1>
        <h1>Active Student {active}</h1>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                {state.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>
                            <button
                             onClick={()=>{setActiv(value.name)
                            }}
                             >select</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
};


export { Hooks };