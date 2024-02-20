function ToDoItem(props){

    // Destructuring
    const{id, name, date}=props; //==>const id=props.id,
                                 //==>const name=props.name,
                                 //==>const date=props.date,
                                 

    return(
        <section className="todo-item">
          <span>
          <span>{id }</span>
          <input type="checkbox" />
          <span>{name}</span>
          </span> 

          <span className="time">{date}</span>
        
      </section>

    )
}

export default ToDoItem;