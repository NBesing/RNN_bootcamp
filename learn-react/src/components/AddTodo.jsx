import { useState } from "react";
function AddTodo(props) {

  const [addInput, setAddInput] = useState('');

  // let addInput=''
  function handleClick() {
    // alert("Don't click me")
    // console.log(document.getElementById('addInput').value);\
    // console.log(addInput);
    props.onSubmitNewTodo(addInput);
    setAddInput('');
  }
  function handleTextChange(event) {
    //console.log(event.target.value);
    //addInput=evenr.target.value
    setAddInput(event.target.value);
  }
  //document.getElementById('addBtn').addEventListener('click', handleClick);
  return (
    <section>
      <section className="addItem">
        
        {console.log('I am rendering')}
        <input type="text" id="addInput" placeholder="Add Item"
        value={addInput}
        onChange={handleTextChange} />
        <button onClick={handleClick} id="addBtn" disabled={addInput.lenghth==0? true: false}>
          Add
        </button>
      </section>
      <p>This is what I typed:{addInput} </p>
    </section>
  );
}

export default AddTodo;
