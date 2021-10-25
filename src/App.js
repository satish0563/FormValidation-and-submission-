import logo from './logo.svg';
import './App.css';
import './style.css';
import { useState } from 'react';

function App() {

  const [fields,setFields]= useState({});
  const [errors,setError]=useState({});

 const  submituserRegistrationForm=(e)=> {
    e.preventDefault();
    if (validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        setFields(fields);
        alert("Form submitted");
    }

  }
  const handleChange=(e)=> {
    let field = fields;
    field[e.target.name] = e.target.value;
    setFields(field);

  }

  const validateForm=()=> {

    let field = fields;
    let error = {};
    let formIsValid = true;

    if (!field["username"]) {
      formIsValid = false;
      error["username"] = "*Please enter your username.";
    }

    

    if (!field["emailid"]) {
      formIsValid = false;
      error["emailid"] = "*Please enter your email-ID.";
    }

   

    if (!field["mobileno"]) {
      formIsValid = false;
      error["mobileno"] = "*Please enter your mobile no.";
    }

    

    if (!field["password"]) {
      formIsValid = false;
      error["password"] = "*Please enter your password.";
    }

    
    setError(error)
    return formIsValid;
  }




  return (
    <div className="App">
     <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="username" value={fields.username} onChange={handleChange} />
        <div className="errorMsg">{errors.username}</div>
        <label>Email ID:</label>
        <input type="email" name="emailid" value={fields.emailid} onChange={handleChange}  />
        <div className="errorMsg">{errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="no" name="mobileno" value={fields.mobileno} onChange={handleChange}   />
        <div className="errorMsg">{errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={fields.password} onChange={handleChange} />
        <div className="errorMsg">{errors.password}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>
    </div>
  );
}

export default App;
