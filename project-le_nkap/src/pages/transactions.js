import "./transactions.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import addbutton from "../assets/addbutton.svg"
import edit from "../assets/edit.svg"
import deleteicon from "../assets/deleteicon.svg"

// import deletebutton from "../assets/deletebutton.svg"


function Transactions(){
    return (
       <div className="transactions container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar">
            <Sidebar/>
          </div>
          
          <div className="col-12 col-md-10">
            <div className="row bg-primary">
              <Topbar/>
            </div>
            <div>
                  <Link className="btn btn-sm addbutton shadow-sm mt-3" >
                    <div className="col ">
                      <img src={addbutton} className="addicon me-4"/>
                      <span>Add an expense or income</span>
                    </div>
                  </Link>
              </div>
              <div className="row  ps-1 pe-1  ">
                      <div className="col-12 col-md-6 expense-income mb-2   bg-danger rounded-3 ">
                          <p className="title text-center ">EXPENSES</p>
                          <div className="row balancerow rounded-4  text-center">
                              <p className="subtitle mt-3">Current expense balance</p>
                              <p className="balance">0FCFA</p>
                          </div>
                          <div className="row mt-4 ps-1 pe-1">
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                          
                              
                            
                            
                          </div>

                      </div>
                      <div className="col-12 col-md-6 expense-income mb-2 bg-success rounded-3 ">
                          <p className="title text-center ">EXPENSES</p>
                          <div className="row balancerow rounded-4 text-center">
                              <p className="subtitle mt-3">Current expense balance</p>
                              <p className="balance">0FCFA</p>
                          </div>
                          <div className="row mt-4 ps-1 pe-1">
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                            <div className="col-4 ">
                              <div class="card rounded-3 mb-5" >
                                    <div className="col d-flex justify-content-end icon-row mt-2">
                                      <img src={edit} className=" icon me-2"/>
                                      <img src={deleteicon} className=" icon me-2"/>
                                    
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Internet</h5>
                                        <div className="row budget  ">
                                          <div className="col-6  text-start">
                                            <h6 className="card-subtitle1 ">Budget</h6>
                                            <h6 className="card-subtitle2">XAF3,000</h6>
                                          </div>
                                          <div className="col-6 text-end ">
                                            <h6 className="card-subtitle1 ">Start date</h6>
                                            <h6 className="card-subtitle2  ">14/02/24</h6>
                                          </div>
                                        </div>

                                    </div>
                                    <div className="row bottom-design">
                                      
                                    </div>
                              </div>
                            </div>
                          
                              
                            
                            
                          </div>

                      </div>
                  
                      
              </div>

          </div>
        </div>
       </div>
      );
}

export default Transactions;