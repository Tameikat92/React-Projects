import React from 'react'
//import App from './App';


function Greeting(person) {

const {name,age,wildClass} = props.person;
 
return(
    <div>
        <h1> Hello, {name} </h1>
        <p> Age: {age} </p>
        <p> Class: {wildClass} </p>
    </div>
)

}

export default Greeting;