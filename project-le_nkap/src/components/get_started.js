import get_started from "./get_started";
import { Link, useHistory } from "react-router-dom";
import { useState,} from "react";
import { useForm } from 'react-hook-form';
import React from 'react'

const GetStarted = () => {
  return (
    <div>
          <div className="container ">
      <div className="row d-flex justify-content-center align-items-center mt-5 ">
        <div className="col-12 col-md-5 shadow-lg form  ps-5 pe-5 pt-3 pb-5">
          <form className="">
            <p className="text-center title mb-4"> Let's Get Started</p>
            <div class="mb-3">
              <label class="form-label">What month do you want to budget?</label>
              <select class="form-select form-select-sm mb-3" >
                    <option selected >January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
              </select>   
            </div>
            <div class="mb-3">
                   <label for="time" class="form-label">Start date</label>
                   <input type="date" class="form-control form-control-sm" id="date" ></input>
             </div>
             <div class="mb-3">
                   <label for="amount-input" class="form-label">How much do you want to budget for this month?</label>
                   <input type="number" class="form-control form-control-sm" id="date" ></input>
             </div>
             <button type="submit" className=" d-flex justify-content-center btn btn-sm button shadow-sm " >
                  Submit
             </button>
              
          </form>
        </div>
        
      </div>
      
    
    </div>
    </div>
  )
}

export default GetStarted;
