import "./expenses.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import { FaPlus } from "react-icons/fa";
import addButton from "../assets/addButton.svg";
import edit from "../assets/edit.svg";
import deleteicon from "../assets/deleteicon.svg";
import AddExpense from "../components/add_expense";
import ExpenseForm from "../components/expense_form";
import React from "react";
import ExpenseFilter from "../components/expense_filter";

const Expenses = ({items,deleteItem}) => {


  return (
    <div>
      <div className="expense container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar">
            <Sidebar />
          </div>

          <div className="col-12 col-md-10">
            <div className="row bg-primary">
              <Topbar />
            </div>

            <div className=" row ">
              <div className="col-6 d-flex justify-content-start">
                <Link
                  to="/add_expense"
                  className="btn btn-sm add-button shadow-sm  mb-2 mt-3"
                >
                  <FaPlus className="me-2" />
                  Add expense
                </Link>
              </div>
              <div className="col-6">
                <ExpenseFilter/>
              </div>
              
            </div>

            <table class="table table-bordered table-sm">
              <thead>
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>

                {items.map((item) => <tr className=" table-row" key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>
                    XAF<span>{item.amount}</span>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <div className="col d-flex justify-content-satrt  icon-row mt-2">
                    
                      <button type="button" class="btn btn-primary btn-sm me-3">
                        Edit
                      </button>
                      <button type="button" class="btn btn-danger btn-sm" onClick={()=> deleteItem(item.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>)
                }
              
                <tr className=" total">
                  <th scope="row"></th>
                  <td colspan="2 ">Total</td>
                 
                  <td>XAF{items.reduce((total, item)=> total + item.amount,0).toFixed(2)}</td>  {/* summing up the total amount */}

                </tr>
              </tbody>
            </table>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
