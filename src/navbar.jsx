import React,{useContext} from 'react'
import { MovieContext } from './context'

export const Navbar = () => {
    const [value]=useContext(MovieContext)
    return (
        <div>
            <h1>Navbar {value.length}</h1>
        </div>
    )
}
