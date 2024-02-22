import "./sidebar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import dashboard from "../assets/dashboard.svg";
import transactions from "../assets/transactions.svg";
import expenses from "../assets/expenses.svg";
import settings from "../assets/settings.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.png";
import dropdown from "../assets/dropdown.svg";

function Sidebar() {

  const navItems= document.querySelectorAll(".nav-item");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("nav-link")) {
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
        });
        target.parentElement.classList.add("active");
      }
    });

  })


  return (
    <div className="sidebar">
      <div className="row pt-3 pb-3 ps-3 logo-row align-items-center ">
        <img src={logo} alt="Description" className="logo ms-5 " />
      </div>
      <div className="row pt-5 nav-row">
        <nav class="nav navbar navbar-expand-lg flex-column">
          
          <div className="nav-item mb-2 mt-4 active rounded-2">
            <Link to="/" class="nav-link " aria-current="page" href="#">
              <img
                src={dashboard}
                alt="Description"
                className="my-icon me-3 "
              />
              Dashboard
            </Link >
          </div>
           <div className="col mb-2 nav-item  rounded-2 ">
              <Link to="/transactions" class="nav-link  " href="#">
                <img
                  src={transactions}
                  alt="Description"
                  className=" my-icon me-3 "
                />
                Transactions
              </Link >
            </div>
            <div className=" nav-item row mb-2 rounded-2 ">
              <Link to="/expenses" class="nav-link" href="#">
                <img src={expenses} alt="Description" className="my-icon  me-3 " />
                Expenses
              </Link >
            </div>
            <div className=" nav-item row mb-2 rounded-2 ">
              <a class="nav-link disabled">
                <img src={user} alt="Description" className=" my-icon me-3 " />
                My profile
              </a>
            </div>
        
          <div className=" nav-item row mb-2 rounded-2 ">
            <a class="nav-link icon ">
              <img src={settings} alt="Description" className="my-icon me-3" />
              Settings
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
