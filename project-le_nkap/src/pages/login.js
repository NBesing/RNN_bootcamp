import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import logo from "../assets/logo.png";
import Submission from "./submission";
// import  logo from './assets/logo.png'

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
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

    if (Object.keys(errors).length === 0) {
      // Redirect to the transaction page
      history.push('/transactions');
    }

  }
  function Submission(values) {
    const errors = {};
  
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    if (!email_pattern.test(values.email) || values.email === "") {
      errors.email = "Please enter a valid email address";
    }
    if (values.password === "") {
      errors.password = "Password is required";
    }
  
    return errors;
  }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-5 welcome-col">
            <div className="row ">
              <img src={logo} alt="Description" className="logo ms-5 mt-3" />
            </div>
            <div className="row welcome-text text-center  ">
              <p className="text1">Welcome Back!</p>
              <p className="text2">
                To continue with Le Nkap, please enter your personal info
              </p>
              <div className="d-flex justify-content-center mt-5">
                <Link to="/signup" className="btn btn-sm outline shadow-sm ">
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-md-7 my-auto">
            <div className="row text-center d-flex justify-content-center align-items-center">
              <p className="login-text  mb-5">Login</p>
              <form onSubmit={handleSubmit}>
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
                <p className="text-danger text-start errormessage">{errors.name}</p>

                <div className="input mb-4 d-flex justify-content-center  mx-auto my-auto ">
                  <img src={lock} alt="Description" className="icon pt-1 me-2 " />
                  <input
                    className="form-control form-control-sm input-field"
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    value={values.password}
                    name="password"
                  />
                </div>
                 <p className="text-danger text-start errormessage">{errors.password}</p>
                <p className="forgot-password">Forgot password?</p>
                < button className="btn btn-sm button shadow-sm " type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;
