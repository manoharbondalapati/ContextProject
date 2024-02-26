// import React, { createContext, useState } from "react";

// import Todo from "./Todo";
// //import Login from "./Login";
// //import Signup from "./Signup";

// export const TodoContext = createContext(null);

// // export const SignupContext = createContext(null);

// // export const LoginContext = createContext(null);

// const App = () => {
//   const [addList, setaddList] = useState([]);
//   const [listItem, setlistItem] = useState("");

//   //   const [signupValues,setsignupValues]=useState({
//   //     fname:"",
//   //     lname:"",
//   //     phno:"",
//   //     dob:"",
//   //     email:"",
//   //     password:"",
//   //     gender:"",
//   //     city:"",
//   //     termsconditions:false,
//   //   });

//   // const [loginValues,setloginValues]=useState
//   // ({
//   //    email:"",
//   //    password:"",
//   // })

//   const todoContextValue = { addList, setaddList, listItem, setlistItem };
//   //  const signupContextValue={signupValues,setsignupValues};
//   //  const loginContextValue={loginValues,setloginValues};

//   return (
//     <div>
//       <TodoContext.Provider value={todoContextValue} />
//       {/* <SignupContext.Provider value={signupContextValue}/> */}
//       {/* <LoginContext.Provider value={loginContextValue}/> */}
//       <Todo />
//       {/* <Login /> */}
//       {/* <Signup /> */}
//       <TodoContext.Provider />
//       {/* <SignupContext.Provider/> */}
//       {/* <LoginContext.Provider/>  */}
//     </div>
//   );
// };

// export default App;
