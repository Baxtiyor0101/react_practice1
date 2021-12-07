import { useState } from "react"

export default function ToggleBtn(){
    const [toggleBtn, setToggleBtn] = useState(false)

    return(
        <>
           <button 
                  className="btn btn-secondary my-2"
                  onClick={()=>setToggleBtn(!toggleBtn)}>toggle btn</button>
                
                {
                    toggleBtn
                      ? <p className="lead">YouTube Content</p>
                      : null
                }
        </>
    )
}