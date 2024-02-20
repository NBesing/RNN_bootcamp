import "./sidebar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import notification from "../assets/notification.svg"
import profile from "../assets/profile.png"
import dropdown from "../assets/dropdown.svg"


function Topbar(){
    return (
          <div className=" top-panel">
            <div className="col-12 d-flex justify-content-end my-auto ">
                <img src={notification} alt="Description" className="ms-5 " /> 
                <img src={profile} alt="Description" className="ms-5 " /> 
                <span>Naura Besingi</span>
                <span>User</span>
                <img src={dropdown} alt="Description" className="ms-5 " />              

            </div>
          </div>
      );
}

export default Topbar;