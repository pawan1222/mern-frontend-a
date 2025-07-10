import "./Register.css";
import { useState } from "react";
import { useRef } from "react";

// export default function Register(){

//     const [user,setUser] = useState({});
//     const handlesubmit=()=>{
//         console.log(user);
//     }

//     return(
//         <div className="App-Register-Row">
//             <div style={{backgroundColor:"silver"}}>
//                 <h2>Registration Form</h2>
//                 <p>
//                     <input type="text"
//                     onChange={(e)=> setUser({...user, firstName: e.target.value})}
//                     placeholder="Enter first name" />
//                 </p>
//                 <p>
//                     <input type="text"
//                     onChange={(e)=> setUser({...user, lastName: e.target.value})}
//                     placeholder="Enter last name" />
//                 </p>
//                 <p>
//                     <input type="text"
//                     onChange={(e)=> setUser({...user, email: e.target.value})}
//                     placeholder="Enter email address" />
//                 </p>
//                 <p>
//                     <input type="password"
//                     onChange={(e)=> setUser({...user, password: e.target.value})}
//                     placeholder="Enter password" />
//                 </p>
//                         <button onClick={handlesubmit}>SUBMIT</button>
//             </div>
//         </div>
//     )
// }

export default function Register() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handlesubmit = () => {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user);
    };


  return (
    <div className="App-Register-Row">
      <div style={{ backgroundColor: "silver" }}>
        <h2>Registration Form</h2>
        <p>
          <input type="text" placeholder="Enter first name" ref={firstName} />
        </p>
        <p>
          <input type="text" placeholder="Enter last name" ref={lastName} />
        </p>
        <p>
          <input type="text" placeholder="Enter email address" ref={email} />
        </p>
        <p>
          <input type="password" placeholder="Enter password" ref={password} />
        </p>
        <button onClick={handlesubmit}>SUBMIT</button>
      </div>
    </div>
  );
}
