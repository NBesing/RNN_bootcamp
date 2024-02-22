import React from "react";
import get_started from "./get_started";


const ExpenseFilter = ({filterItems}) => {
  return (
    <div>
      <select className="form-select select-filter form-select-sm mb-3 mt-3" onChange={(event)=>filterItems(event.target.value)}>
        <option selected></option>
        <option value="Transportation">Transportation</option>
        <option value="Internet">Internet</option>
        <option value="Groceries">Groceries</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Extras">Extras</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
