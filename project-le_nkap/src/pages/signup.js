import "./signup.css";
import { useState,} from "react";
import { useForm } from 'react-hook-form';
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import lock from "../assets/lock.png";
import user from "../assets/user.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import Submission from "./submission";

function Signup() {
    const [values, setValues] = useState({
      name: "",
      email: "",
      contact: "",
      password: "",
      confirm_password: "",
    })
    const[errors, setErrors] = useState({});
    const history = useHistory();

    function handleInput(e) {
      const newObject = {...values, [e.target.name]: [e.target.value] };
      setValues(newObject);
    } 
    
    function handleSubmit(e) {
      e.preventDefault();
      const errors = Submission(values);
      setErrors(errors);
    
      if (Object.keys(errors).length === 0 && values.confirm_password !== "") {
        // Redirect to the transaction page
        history.push('/transactions');
      }
    }
   
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-5 welcome-col">
            <div className="row ">
              <img src={logo} alt="Description" className="logo ms-5 mt-3" />
            </div>
            <div className="row welcome-text text-center  ">
              <p className="text1">Hi there!</p>
              <p className="text2">
                Enter your personal details to begin your journey with Le Nkap
              </p>
              <div className="d-flex justify-content-center mt-5">
                <Link to="/login" className="btn btn-sm outline shadow-sm ">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-md-7 ">
            <div className="messages">
            
            </div>
            <div className="row text-center ">
              <p className="login-text mt-5 mb-5">Sign Up</p>
              <form  onSubmit={handleSubmit}>
                <div className=" input mb-4 d-flex justify-content-center mx-auto my-auto ">
                  <img src={user} alt="Description" className="icon pt-1 me-2 " />
                  <input
                    className="form-control form-control-sm input-field "
                    type="text"
                    placeholder="Name"
                    aria-label=".form-control-lg example"
                    name="name"
                    onChange={handleInput}   
                  />
                </div>
                <p className="text-danger text-start errormessage">{errors.name}</p>

                <div className="input mb-4 d-flex justify-content-center mx-auto my-auto ">
                  <img src={mail} alt="Description" className="icon pt-1 me-2 " />
                  <input
                    className="form-control form-control-sm input-field"
                    type="email"
                    placeholder="Email"
                    aria-label=".form-control-lg example"
                    name="email"
                    onChange={handleInput}
                  />
                </div>
                <p className="text-danger /* margin-top: -25px!important; text-start errormessage">{errors.email}</p>

                <div className="input mb-4 d-flex justify-content-center  mx-auto my-auto ">
                  <img
                    src={phone}
                    alt="Description"
                    className="icon pt-1 me-2 "
                  />
                  <input
                    className="form-control form-control-sm input-field"
                    type="tel"
                    placeholder="Contact"
                    aria-label=".form-control-lg example"
                    name="contact"
                    onChange={handleInput}
                  />
                </div>
                <p className="text-danger text-start errormessage">{errors.contact}</p>

                <div className="input mb-4 d-flex  justify-content-center   mx-auto my-auto ">
                  <img src={lock} alt="Description" className="icon pt-1 me-2 " />
                  <input
                    className="form-control form-control-sm input-field"
                    type="password"
                    placeholder="Password"
                    aria-label=".form-control-lg example"
                    name="password"
                    onChange={handleInput}
                  />
                 
                </div>
                <p className="text-danger text-start errormessage">{errors.password}</p>
                
                <div className="input mb-4 d-flex  justify-content-center   mx-auto my-auto ">
                  <img src={lock} alt="Description" className="icon pt-1 me-2 " />
                  <input
                    className="form-control form-control-sm input-field"
                    type="password"
                    placeholder="confirm Password"
                    aria-label=".form-control-lg example"
                    name="confirm_password"
                    onChange={handleInput}
                  />
                 
                </div>
                <p className="text-danger text-start errormessage">{errors.confirm_password}</p>
                
                <button type="submit" className="btn btn-sm button shadow-sm " >
                  Signup
                </button>
                <p></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Signup;
