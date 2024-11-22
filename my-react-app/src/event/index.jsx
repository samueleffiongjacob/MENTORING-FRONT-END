import React from 'react'

const ButtonWithEvent = () => {
    const handleclick = () => {
        console.log("BUTTON CLICK");
    };
    
    return (
        <>
            <h1>Event Handling in React</h1>
            <p>React handles events similarly to plain JavaScript
                but uses camelCase syntax for event names, 
                such as onClick, onChange, and onSubmit.Example: Button Click Event
            </p>
            <button onClick={handleclick}> click me </button>
        </>
    )
};

export default ButtonWithEvent