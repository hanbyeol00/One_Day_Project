import "../css/TodoList.css";

const TodoList = (props) => {
  const { todoList, todoDelete } = props;

  const deleteHandler = (e) => {
    const target = e.target;
    const tr = target.closest("TR");
    const seq = tr.dataset.seq;
    todoDelete(seq);
  };

  const itemCheck = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      if (tr.className !== "checked") {
        tr.className += "checked";
      } else {
        tr.classList.remove("checked");
      }
    }
  };

  const todoListView = todoList.map((todoData) => {
    return (
      <tr key={todoData.seq} data-seq={todoData.seq}>
        <td className="button" onClick={deleteHandler}>
          &times;
        </td>
        <td className="content" onClick={itemCheck}>
          {todoData.todo}
        </td>
        <td className="check">&#10003;</td>
      </tr>
    );
  });

  return (
    <table className="Todo List">
      <tbody>{todoListView}</tbody>
    </table>
  );
};
export default TodoList;
