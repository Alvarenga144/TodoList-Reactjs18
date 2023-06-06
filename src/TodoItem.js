function TodoItem(props) {
    return(
      <li>
        <span>Check {props.completed} </span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export { TodoItem };