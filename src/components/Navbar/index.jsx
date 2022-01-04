import React , {useContext, useState} from 'react'
import { MovieContext } from '../../context/movie';
import { movies } from '../../mock/data';

export const Navbar = () => {
    const [state] = useContext(MovieContext);
    const [active, setActive] = useState('id');
    const onChange = (e)=>{
        const {value} = e.target;
        let res = movies.filter((vl)=>
            `${vl[active]}`.toLowerCase().includes(value.toLowerCase())
        );
        setState(res);
    };
    const onSelect = (e)=> {
        setActive(e.target.value);
    };
    return (
        <>
            <h1>Navbar {state.length}</h1>
            <select onChange={onSelect} name="" id="">
                <option value="id">ID</option>
                <option value="title">Title</option>
                <option value="desc">Description</option>
            </select>
            <input type="text" onChange={onChange} />
        </>
    )
}
export default Navbar;