import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodos, handleEditTodos, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>handleEditTodos(index)}>
          <i className="fa-solid fa-pen-to-square" />
        </button>
        <button onClick={()=>handleDeleteTodos(index)}>
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
