import React from "react"

import Greeting from "./me"

// child component (Greeting.js)
const Greetings =(props) => {
    return (
        <>
            <Greeting name ="Alice"/>
            <h2>{props.name}</h2>
        </>
    )
};

export default Greetings;


