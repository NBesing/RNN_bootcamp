import React from "react";
import get_started from "./get_started";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { FaPlus } from "react-icons/fa";

const AddExpense = ( props) => {

  const [values,setValues]=useState({
    category:"",
    description:"",
    amount:"",
    date:"",
  })

  function handleInput(e){
    setValues({...values, [e.target.name]: e.target.value})
  }

  

  return(
    <div className="container ">
        <div className="row d-flex popup justify-content-center align-items-center mt-5 ">
          <div className="col-12 popup-inner col-md-5 shadow-lg form  ps-5 pe-5 pt-2 pb-5">
            <form className="" >
             
              <p className="text-center title mb-3"> Add Expense</p>
              <div class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select form-select-sm mb-3" onChange={handleInput}>
                  <option selected></option>
                  <option value="1">Transportation</option>
                  <option value="2">Internet</option>
                  <option value="3">Groceries</option>
                  <option value="4">Food</option>
                  <option value="5">Bills</option>
                  <option value="6">Entertainment</option>
                  <option value="7">Extras</option>
                </select>
              </div>
              
              <div class="mb-2">
                <label className="form-label">Description</label>
                <input className="form-control form-control-sm" type="text" onChange={handleInput} ></input>
              </div>
              <div class="mb-2">
                <label for="amount-input" class="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="date"
                  onChange={handleInput}
                ></input>
              </div>
              <div class="mb-2">
                <label for="time" class="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="date"
                  onChange={handleInput}
                ></input>
              </div>

              <button
                type="submit"
                className=" d-flex justify-content-center btn btn-sm button shadow-sm "
              >
                Submit
              </button>
            </form>
            {props.children}
          </div>
        </div>
        
 
    </div>
  );
};

export default AddExpense;
