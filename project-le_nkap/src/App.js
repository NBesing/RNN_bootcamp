import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Transactions from "./pages/transactions";
import Topbar from "./components/topbar";
import GetStarted from "./components/get_started";
import Expenses from "./pages/expenses";
import AddTransaction from "./components/add_transaction";
import ExpenseFilter from "./components/expense_filter";
import AddExpense from "./components/add_expense";
import ExpenseForm from "./components/expense_form";
// import Transactions from "./pages/transactions";


function App() {

   const [expenses, setExpenses] = useState([
      {id: 1,category: "Groceries",description: "1 tray of egg",amount: 2500,date: '22/ 2/ 2024',},
      {id: 2,category: "Transportation",description: "transport to market",amount: 500,date: '22/ 2/ 2024',},
      {id:3,category:"Food",description:"bunch of plantain",amount:4000,date:'23/2/2024',},
    ]);

   const deleteItem= (id) => {
      setExpenses(expenses.filter(expenses =>expenses.id !== id  )) }

   const filterItems =(cat)=>{
      setExpenses(expenses.filter(expenses => expenses.category == cat))
   }

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
               <Expenses items={expenses} deleteItem={deleteItem}/>
            </Route>
            <Route path="/get_started">
               <GetStarted/>
            </Route>
            <Route path="/add_transaction">
               <AddTransaction/>
            </Route>
            <Route path="/add_expense">
               <AddExpense/>
            </Route >
            <Route path="/expense_filter">
               <ExpenseFilter filterItems={filterItems}/>
            </Route>
            <Route path="/expense_form">
               <ExpenseForm/>
            </Route>



          </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
