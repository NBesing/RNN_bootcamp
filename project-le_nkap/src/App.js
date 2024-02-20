import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Transactions from "./pages/transactions";
import Topbar from "./components/topbar";
import GetStarted from "./components/get_started";
import Expenses from "./pages/expenses";
import AddTransaction from "./components/add_transaction";
// import Transactions from "./pages/transactions";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/signup">
               <Signup/>
            </Route >
            <Route path="/login">
               <Login/>
            </Route>
            <Route exact path="/sidebar">
               <Sidebar/>
            </Route>
            <Route path="/transactions">
               <Transactions/>
            </Route>
            <Route path="/topbar">
               <Topbar/>
            </Route>
            <Route path="/expenses">
               <Expenses/>
            </Route>
            <Route path="/get_started">
               <GetStarted/>
            </Route>
            <Route path="/add_transaction">
               <AddTransaction/>
            </Route>

          </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
