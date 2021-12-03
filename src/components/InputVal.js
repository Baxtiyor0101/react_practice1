import { useState } from "react";

export default InputVal() { 
    const [value, setValue] = useState("baxti")

    return(
        <>
        <p>Value: {value}</p>
        <input 
            type="text" 
            className="form-control"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
        </>
    )
}