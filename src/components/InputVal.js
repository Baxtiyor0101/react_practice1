import { useState } from "react";


export default function InputVal () {
    const [value, setValue] = useState("baxti")
        return (
            <div>
                <p>Value: {value}</p>
                <input 
                type="text" 
                className="form-control"
                value={value}
                onChange={event => setValue(event.target.value)}
                />
            </div>
        )
}

