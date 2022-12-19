import "../css/TodoInput.css";

const TodoInput = (props) => {
  const { setTodo, todo, todoInsert } = props;

  const onKeyClickHandler = (e) => {
    todoInsert();
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value;
      if (value === "") {
        alert("값을 입력해주세요");
        return false;
      }
      setTodo({ ...todo, todo: value });
      todoInsert();
      e.target.select();
    }
  };

  const todoOnChangeHandler = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, todo: value });
  };

  return (
    <div className="Todo input">
      <input
        onKeyDown={onKeyDownHandler}
        onChange={todoOnChangeHandler}
        name="todo"
        placeholder="오늘 할 일을 입력호 Enter..."
      />
      <button onClick={onKeyClickHandler}>추가</button>
    </div>
  );
};
export default TodoInput;
