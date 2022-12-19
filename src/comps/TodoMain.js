import "../css/TodoMain.css";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todo, setTodo] = useState({
    seq: null,
    todo: "",
  });
  const [todoList, setTodoList] = useState([]);

  const todoInsert = () => {
    if (!todo.seq) {
      setTodoList([
        ...todoList,
        {
          seq: uuid(),
          todo: todo.todo,
        },
      ]);
    }
  };

  const todoDelete = (seq) => {
    const newTodo = todoList.filter((todo) => {
      return todo.seq !== seq;
    });
    setTodoList([...newTodo]);
  };

  return (
    <div className="Main">
      <TodoInput setTodo={setTodo} todo={todo} todoInsert={todoInsert} />
      <TodoList todoList={todoList} todoDelete={todoDelete} />
    </div>
  );
};
export default TodoMain;
