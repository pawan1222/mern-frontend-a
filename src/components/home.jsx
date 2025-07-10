// export default function Home({age}){
//     if(age>18) return(<div><h1>Welcome</h1></div>)
//         else{
//             return ( <div><h1>Not allowed</h1></div>)
//         }
// }

// export default function Home({age}){
//     return (age>18) ? (<div><h1>Welcome</h1></div>) : ( <div><h1>Not allowed</h1></div>)
// }


// export default function Home({age}){
//     return (age>18) && (<div><h1>Welcome</h1></div>)
// }

// export default function Home(){
//     const handleClick = () =>{
//         alert("Hello");
//     }
//     const handleSubmit = (name) =>{
//         alert(`Hello ${name}`)
//     }

//     return(
//         <>
//             <h1>Hello World</h1>
//             <button onClick={handleClick}>Click</button>        
//             <button onClick={() => handleSubmit("john")}>Click Me</button>
//         </>
//     )
// }


// import { useState } from "react"
// export default function Home(){
//     const [score, setScore] = useState(0);

//     const increment = () =>{
//         setScore(score+1);
//     }
//     const decrement = () =>{
//         setScore(score-1);
//     }
//     return(
//         <>
//             <p>{score}</p>
//             <button onClick={increment}>Increment Score</button>
//             <button onClick={decrement}>decrement Score</button>
//         </>
//     )
// }


// import { useState } from "react"
// export default function Home(){
//     const [score, setScore] = useState(0);
//     const [wicket, setWicket] = useState(0);
//     const [message,setMessage]= useState("");

//     const increment = () =>{
//         setScore(score+1);
//     }
//     const incrementwicket = () =>{
//         setWicket(wicket+1);
//         setMessage("Well done!");
//     }

//     return(
//         <>
//             <p>{score}</p>
//             <button onClick={increment}>Increment Score</button>


//             <p>{wicket}</p>
//             <button onClick={incrementwicket}>Increment wicket</button>

//             <p>{message}</p>
//         </>
//     )
// }


import React from "react";

export default function Form() {
  return (
    <form>
      <div>
        <label>First Name:</label>
        <input type="text" placeholder="Enter first name" />
      </div>

      <div>
        <label>Last Name:</label>
        <input type="text" placeholder="Enter last name" />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
