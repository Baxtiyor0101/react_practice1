import React, { useState, useContext } from 'react'
import { MovieContext } from './context'


export const Movie = () => {
    const [state, setstate] = useContext(MovieContext);
   
    const onDelete=(id)=>{
        let res=state.filter((vl)=>vl.id !== id)


        setstate(res)
    }
    return (
        <div >
            <h1>Movies</h1>
             {
                 state.map((value)=>(
                     <div>
                     <h1>  
                         {value.id}  {value.name} <button onClick={()=>onDelete(value.id)}>delete</button>
                     </h1>

                     </div>
                 ))
             }
        </div>
    )
}
