import {useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import ListOfTodos from './components/ListOfTodos'


function App() {
  const[newInput,setNewInput]=useState()
  function handleSubmitNewTodo(addInput){
    console.log('I have received data from new todo child',addInput);
    setNewInput(addInput)
  }
  
  
  return (
    <>
      
        <div id='todocontainer'>
         
          <h1 id="h1">TO DO APP</h1>
          <AddTodo onSubmitNewTodo={handleSubmitNewTodo}/>
          <ListOfTodos newlyAddedInput={newInput}/>
          
          
          
        
        
      </div>
        
    </>
  )
}

export default App
