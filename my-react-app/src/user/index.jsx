import React , { useState } from 'react'

const TextIput = () => {
    // handling user input 

    const[text, setText] = useState('')

    // handle change of user input
    const HandleChange = (event) => {
        setText(event.target.value);
    };


    return (
        <div>
            <h1>Handling User Input (e.g., Form Fields)</h1>
            <p>To handle user input, you often need to track the value of an input field. useState is useful for storing the current value of an input and updating it as the user types.

            Example: Controlled Input</p>
            <input type="text"  value={text} onChange={HandleChange} placeholder='TYPE HERE' /> 
            <p> Current Input: {text} </p>
        </div>
    )
}

export default TextIput