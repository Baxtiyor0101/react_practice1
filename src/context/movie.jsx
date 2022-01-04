import React, {createContext, useState} from 'react'
import {movies} from '../mock/data'

export const MovieContext = createContext();

export const Movie = ({children}) => {
    const [state, setState] = useState(movies)
    return (
        <MovieContext.Provider value={[state, setState]}>
            {children}
        </MovieContext.Provider>
    )
}
export default Movie;