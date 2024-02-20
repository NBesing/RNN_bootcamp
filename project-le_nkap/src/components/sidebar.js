import "./sidebar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
  return (
    <div className="sidebar">
      <div className="row pt-3 pb-3 ps-3 logo-row align-items-center ">
        <img src={logo} alt="Description" className="logo ms-5 " />
      </div>
      <div className="row pt-5 nav-row">
        <nav class="nav navbar navbar-expand-lg flex-column">
          
          <div className="row mb-2 mt-4 ">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src={dashboard}
                alt="Description"
                className="my-icon me-3 "
              />
              Dashboard
            </a>
          </div>
           <div className="col mb-2 link1 rounded-2 ">
              <a class="nav-link  " href="#">
                <img
                  src={transactions}
                  alt="Description"
                  className=" my-icon me-3 "
                />
                Transactions
              </a>
            </div>
            <div className="row mb-2 rounded-2 ">
              <a class="nav-link" href="#">
                <img src={expenses} alt="Description" className="my-icon  me-3 " />
                Expenses
              </a>
            </div>
            <div className="row mb-2 rounded-2 ">
              <a class="nav-link disabled">
                <img src={user} alt="Description" className=" my-icon me-3 " />
                My profile
              </a>
            </div>
        
          <div className="row mb-2 rounded-2 ">
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
