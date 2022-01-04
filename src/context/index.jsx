import React from 'react'
import Movie from './movie'

export const Context = ({children}) => {
    return (
        <Movie>
            {children}            
        </Movie>
    )
}
export default Context;  