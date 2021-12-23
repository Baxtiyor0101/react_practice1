import React, {createContext,useState} from 'react'


 export const MovieContext = createContext()
export const Context = (props) => {
    const [state, setstate] = useState([
        {id:1,name:'Angel'},
        {id:2,name:'Suits'},
        {id:3,name:'Taxi'},
        {id:4,name:'Friends'},
        {id:5,name:'Shumbola'}
    ])
    return (
       <MovieContext.Provider value={[state, setstate]}>
           {props.children}
       </MovieContext.Provider>
    )
}
