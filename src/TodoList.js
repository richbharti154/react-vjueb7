import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = event => {
    event.preventDefault();
    if (!editMode) {
      setTodos([...todos, input]);
    } else {
      const newTodos = [...todos];
      newTodos[editIndex] = input;
      setTodos(newTodos);
      setEditMode(false);
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInput(todos[index]);
  };

  const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit">{editMode ? "Update Todo" : "Add Todo"}</button>
      </form>
      <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search Todos" />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;