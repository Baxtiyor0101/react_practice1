import React, { useState } from "react";
import "./style/styles.css"
import Counter from "./components/Counter";
import InputVal from "./components/inputVal";


function App(){
    const [toggleBtn, setToggleBtn] = useState(false)
    
    
    return (
        <>
           <div className="app w-50 mx-auto">
               <Counter/>
               <hr />
               <InputVal/>
                <button 
                  className="btn btn-secondary"
                  onClick={()=>setToggleBtn(!toggleBtn)}>toggle btn</button>
                
                {
                    toggleBtn
                      ? <p className="lead">YouTube Content</p>
                      : null
                }
            </div>
           
        </>
     )
}
export default App;