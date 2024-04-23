import React, {useState} from "react";
import './login.css';


 const LoginForm = () => {
    const [Fullname , setFullname] = useState({
        fname : '',
        lname : '',
        email : '',
        phone : ''
      });
      const InputEvent = (Event) => {
  
    const {value , name } = Event.target;

    setFullname((preValue) =>{

      return{
        ...preValue,
         [name] : value
      }
    
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
      //  setFullName(name);
      //  setnewFullName(lastName);
  };
  
  
  

  return(
    <>
    <div className='main-div'>

   <form onSubmit={OnSubmit}>
     <h1> Hello {Fullname.fname} {Fullname.lname} </h1>
     <p> {Fullname.email} </p>
     <p> {Fullname.phone} </p> 
     <input type="text" placeholder='Enter Your Name' name = "fname" onChange={InputEvent} value={Fullname.fname}/> <br/>
     <input type="text" placeholder='Enter Your Last' name = "lname" onChange={InputEvent} value={Fullname.lname}/><br/> 
     <input type="email" placeholder='Enter Your Email' name = "email" onChange={InputEvent} value={Fullname.email}/><br/> 
     <input type="number" placeholder='Enter Your Mobile Number' name = "phone" onChange={InputEvent} value={Fullname.phone}/><br/> 
     <button type='Submit'> Submit Me 👍 </button>
     </form>
     </div>
    </>
  );

 }

 export default LoginForm;