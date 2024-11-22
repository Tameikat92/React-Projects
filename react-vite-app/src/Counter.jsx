import React, {useState} from "react";

function Counter() {
    //state and use state 
    const [count, setCount] = useState(0); 

   //const increment = () => setCount(count +1);
  // const decrement = () => setCount(count - 1);


const increment = () => {
    setCount((prevState) => prevState +1)
}

const decrement = () => {
    setCount((prevState) => prevState -1)
}
   return (
    <div className="counter">
        <h2> Simple with prevState</h2>
        <p> Current Count: <strong> {count} </strong> </p>

        <div className="buttons"> 
            <button onClick = {increment}></button>
            <button onClick = {decrement}></button>
        </div>
    </div>



   )

}

export default Counter;