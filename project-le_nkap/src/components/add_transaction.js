import get_started from "./get_started";
import { Link, useHistory } from "react-router-dom";

function AddTransaction() {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center mt-5 ">
        <div className="col-12 col-md-5 shadow-lg form  ps-5 pe-5 pt-3 pb-5">
          <form className="">
            <p className="text-center title mb-4"> Add a Category</p>
            <div class="mb-3">
              <label class="form-label">Transaction type</label>
              <select class="form-select form-select-sm mb-3" >
                    <option selected ></option>
                    <option value="1">Expense</option>
                    <option value="2">Income</option>
              </select>   
            </div>
            <div class="mb-3">
              <label class="form-label">Category</label>
              <input class="form-control form-control-sm" type="text" ></input>
            </div>
             <div class="mb-3">
                   <label for="amount-input" class="form-label">Amount</label>
                   <input type="number" class="form-control form-control-sm" id="date" ></input>
             </div>
            <div class="mb-3">
                   <label for="time" class="form-label">Date</label>
                   <input type="date" class="form-control form-control-sm" id="date" ></input>
             </div>
            
             <button type="submit" className=" d-flex justify-content-center btn btn-sm button shadow-sm " >
                  Submit
             </button>
              
          </form>
        </div>
        
      </div>
      
    
    </div>
  );
}

export default AddTransaction;
