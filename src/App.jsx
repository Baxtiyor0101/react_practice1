
import React from 'react'
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export const App = () => {
    return (
        <div>
            <h1>hello</h1>
            <Navbar />
            <Sidebar />
            <Movie />

        </div>
    )
}

export default App;