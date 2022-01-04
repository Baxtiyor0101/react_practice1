import React, {useContext} from 'react'
import { MovieContext } from '../../context/movie';

export const Movie = () => {
    const [state, setState] = useContext(MovieContext)

    const onDelete = id =>{
        let res = state.filter((value)=>value.id !== id)
        setState(res)
    }
    return (
        <>
        <h1>Movie</h1>
            {
                state.map((value)=>{
                    return(
                        <>
                            <h1>
                                {value.id} {value.title}
                            </h1>
                            <h3>
                                {value.desc}{value.category} <button onClick={()=>onDelete(value.id)}>delete</button>
                            </h3>
                        </>
                    );
                })}
        </>
    )
}
export default Movie;