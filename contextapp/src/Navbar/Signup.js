// import React,{useState} from 'react';
// import './signup.css'

// const Signup = () => {
     
//     const [firstname,setfirstname]=useState('');
//     const [lastname,setlastname]=useState('');
//     const [phno,setphno]=useState('');
//     const [dob,setdob]=useState('');
//     const [email,setemail]=useState('');
//     const [password,setpassword]=useState('');
//     const [gender,setgender]=useState('');
//     const [city, setcity] = useState('select city'); 
//     const [check,setcheck]=useState(false);

// const handleSubmit=(event)=>
// {
//     event.preventDefault();
//     // const {firstname,lastname,phno,dob,email,password,gender,check}=useState;

//     if(firstname==="" || lastname===""||  phno==="" || dob===""||email===""||password===""||gender===""|| city === '' || check==="")
//     {
//         alert('please Enter all fields')
//     }
//     else
//     {
//         alert(`firstname: ${firstname}\n lastname: ${lastname} \n phon: ${phno} \n dob: ${dob} \n emailid: ${email} \n password: ${password} \n Gender: ${gender} \n City: ${city} \n Accepted Terms & Conditions \n Thank you !!!..`)
//     }
//        setfirstname('');
//         setlastname('');
//         setphno('');
//         setdob('');
//         setemail('');
//         setpassword('');
//         setgender('');
//         setcity('');
//         setcheck(false);

// }



//   return (
//     <div className='container'>
//     <form onSubmit={handleSubmit}>
//   <div className='form-group'>
//     <label htmlFor="firstname" className="form-label">First Name</label>
//     <input type="text" className="form-control" id="firstname" value={firstname} onChange={(event)=>{setfirstname(event.target.value)}}/>
//     <label htmlFor="lastname" className="form-label">Last Name</label>
//     <input type="text" className="form-control" id="lastname"  value={lastname} onChange={(event)=>{setlastname(event.target.value)}}/>
//   </div>
//   <div className='form-group'>
//     <label htmlFor="phno" className="form-label">Phone Number</label>
//     <input type="tel" className="form-control" id="phno"  value={phno} onChange={(event)=>{setphno(event.target.value)}}/>
//     <label htmlFor="dob" className="form-label">Date of Birth</label>
//     <input type="date" className="form-control" id="dob" value={dob} onChange={(event)=>{setdob(event.target.value)}}/>
//   </div>
//   <div className='form-group'>
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(event)=>{setemail(event.target.value)}}/>
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
//   </div>
//   <div className='form-group1'>
//     <label>Gender:</label>
//     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  value='male' checked={gender==='male'} onChange={(event)=>{setgender(event.target.value)}}/>
//     <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
//     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"value='female' checked={gender==='female'} onChange={(event)=>{setgender(event.target.value)}}/>
//     <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
//     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value='transgender'  checked={gender==='transgender'} onChange={(event)=>{setgender(event.target.value)}}/>
//     <label className="form-check-label" htmlFor="exampleRadios3">Transgender</label>
//   </div>
//   <div className='form-group'>
//     <label>Select Your City</label>
//     <select value={city} onChange={(event) => setcity(event.target.value)}>
//     <option value="select city" disabled>Select City</option>
//     <option value="Hyderabad">Hyderabad</option>
//     <option value="Vijayawada">Vijayawada</option>
//     <option value="Tadepalli">Tadepalli</option>
//     <option value="Rajamandury">Rajamandury</option>
//     <option value="Tenali">Tenali</option>
//     <option value="Vizag">Vizag</option>
//     </select>
//   </div>
//   <div className='form-group1'>
//     <input type="checkbox" className="form-check-input" id="check" checked={check} onChange={(event)=>{setcheck(event.target.checked)}}/>
//     <label className="form-check-label" htmlFor="check">Please Accept terms & conditions</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>
//   )
// }

// export default Signup;




//using object method
// import React, { useState } from 'react';
// import './signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     phno: '',
//     dob: '',
//     email: '',
//     password: '',
//     gender: '',
//     city: 'select city',
//     check: false
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let errorMessage = '';

//     if (formData.firstname === '' || formData.lastname === '' || !formData.phno.match(/^\d{10}$/) || formData.dob === '' || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/) || formData.gender === '' || formData.city === 'select city' || !formData.check) {
//       errorMessage = 'Please enter all details correctly\n email should like this example@gmail.com \n password shold be 8-16 characters one uppercase,one lower,one digit,one speacil character';
//     }
  
 
//     // If there are no errors, display the form data in an alert
//     if (errorMessage !== '') {
//       alert(errorMessage);
//     } else {
//       // If there are no errors, display the form data in an alert
//       let message = '';
//       message += 'First Name: ' + formData.firstname + '\n';
//       message += 'Last Name: ' + formData.lastname + '\n';
//       message += 'Phone Number: ' + formData.phno + '\n';
//       message += 'Date of Birth: ' + formData.dob + '\n';
//       message += 'Email: ' + formData.email + '\n';
//       message += 'Password: ' + formData.password + '\n';
//       message += 'Gender: ' + formData.gender + '\n';
//       message += 'City: ' + formData.city + '\n';
//       alert(message);

//       setFormData({
//         firstname: '',
//         lastname: '',
//         phno: '',
//         dob: '',
//         email: '',
//         password: '',
//         gender: '',
//         city: 'select city',
//         check: false
//       });
//     }
//   }

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className='form-group'>
//           <label htmlFor="firstname" className="form-label">First Name</label>
//           <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="lastname" className="form-label">Last Name</label>
//           <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="phno" className="form-label">Phone Number</label>
//           <input type="tel" className="form-control" id="phno" name="phno" value={formData.phno} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="dob" className="form-label">Date of Birth</label>
//           <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <div className='form-group1'>
//           <label>Gender:</label>
//           <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
//           <label className="form-check-label" htmlFor="male">Male</label>
//           <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
//           <label className="form-check-label" htmlFor="female">Female</label>
//           <input className="form-check-input" type="radio" name="gender" id="transgender" value="transgender" checked={formData.gender === 'transgender'} onChange={handleChange} />
//           <label className="form-check-label" htmlFor="transgender">Transgender</label>
//         </div>
//         <div className='form-group'>
//           <label>Select Your City</label>
//           <select name="city" value={formData.city} onChange={handleChange}>
//             <option value="select city" disabled>Select City</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Vijayawada">Vijayawada</option>
//             <option value="Tadepalli">Tadepalli</option>
//             <option value="Rajamandury">Rajamandury</option>
//             <option value="Tenali">Tenali</option>
//             <option value="Vizag">Vizag</option>
//           </select>
//         </div>
//         <div className='form-group1'>
//           <input type="checkbox" className="form-check-input" id="check" name='check' checked={formData.check} onChange={handleChange} />
//           <label className="form-check-label" htmlFor="check">Please Accept terms & conditions</label>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Signup;


// button disabled untill the all inputfeilds corrcctly
import React, { useState, useEffect } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const   navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phno: '',
    dob: '',
    email: '',
    password: '',
    gender: '',
    city: 'select city',
    check: false
  });
  const [isFormValid, setIsFormValid] = useState(false);
  

  useEffect(() => {
    setIsFormValid(
      formData.firstname !== '' &&
      formData.lastname !== '' &&
      formData.phno.match(/^\d{10}$/) &&
      formData.dob !== '' &&
      formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/) &&
      formData.gender !== '' &&
      formData.city !== 'select city' &&
      formData.check
    );
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login',{state:{email: formData.email}});

    let message = '';
    

    // Construct the message
    message += 'First Name: ' + formData.firstname + '\n';
    message += 'Last Name: ' + formData.lastname + '\n';
    message += 'Phone Number: ' + formData.phno + '\n';
    message += 'Date of Birth: ' + formData.dob + '\n';
    message += 'Email: ' + formData.email + '\n';
    message += 'Password: ' + formData.password + '\n';
    message += 'Gender: ' + formData.gender + '\n';
    message += 'City: ' + formData.city + '\n';

    // Display the alert with the constructed message
    alert(message);
    setFormData({
              firstname: '',
              lastname: '',
              phno: '',
              dob: '',
              email: '',
              password: '',
              gender: '',
              city: 'select city',
              check: false
            });
           // setisAuth(false)
           

  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className='container' id='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="phno" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phno" name="phno" value={formData.phno} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className='form-group1'>
          <label>Gender:</label>
          <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="male">Male</label>
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="female">Female</label>
          <input className="form-check-input" type="radio" name="gender" id="transgender" value="transgender" checked={formData.gender === 'transgender'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="transgender">Transgender</label>
        </div>
        <div className='form-group'>
          <label>Select Your City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="select city" disabled>Select City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Tadepalli">Tadepalli</option>
            <option value="Rajamandury">Rajamandury</option>
            <option value="Tenali">Tenali</option>
            <option value="Vizag">Vizag</option>
          </select>
        </div>
        <div className='form-group1'>
          <input type="checkbox" className="form-check-input" id="check" name='check' checked={formData.check} onChange={handleChange} />
          <label className="form-check-label" htmlFor="check">Please Accept terms & conditions</label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;