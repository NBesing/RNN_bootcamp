import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

function ListOfTodos(props) {
  //the setTodos helps tho change the state
  const [todos, setTodos] = useState([
    { id: "1.", name: "Morning meditation", date: "06:00" },
    { id: "2.", name: "Read Mails", date: "07:00" },
    { id: "3.", name: "Prepare breakfast", date: "07:30" },
    { id: "4.", name: "Take my bath", date: "08:00" },
    { id: "5.", name: "Leave for work", date: "09:00" },
  ]);

  useEffect(() => {
    console.log("page has loaded");
    // todos.unshift({
    //   id:5,
    //   name:props.newlyAddedInput,
    //   date:'16:13',
    // })
    if(props.newlyAddedInput !=undefined){
      const newlyAddedTodoObject = {
        id: todos.length + 1,
        name: props.newlyAddedInput,
        date: "16:13",
      };
    

   
    setTodos([newlyAddedTodoObject, ...todos]);//==> the spread operator, which helps in combining the elts of two different arrays e.g A[1,2], B[3,4], [...A, ...B]= [1,2,3,4]. this helps the new todo to simply add to the array contsinong the already created todos
  }}, [props.newlyAddedInput]);


  const todosComponents = todos.map(generateTodoItem);
  //console.log(todosComponents);

  function generateTodoItem(todo, index) {
    // console.log("Todo is ", todo)
    // console.log("Index is ", index)
    return <ToDoItem id={todo.id} name={todo.name} date={todo.date} />;
  }

  return (
    <section>
      <section className="todo-title">
        <h3>To Do</h3>
        {todosComponents}
        {/*         
        <ToDoItem id="1." name="Morning meditation" date="6:00" />
        <ToDoItem id="2." name="Read mails" date="7:00"/>
        <ToDoItem id="3." name="Prepare breakfast" date="7:30"/>
        <ToDoItem id="4."  name="Take my bath" date="8:00"/>
        <ToDoItem id="5." name="Leave for work" date="9:00"/> */}
      </section>
    </section>
  );
}

export default ListOfTodos;
