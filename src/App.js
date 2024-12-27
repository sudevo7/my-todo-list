import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]); // Pre-fill input with the current task
  };

  const saveEdit = () => {
    const updatedTodos = todos.map((todo, i) => 
      i === editIndex ? editValue : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple To-Do List</h1>
      <label style={styles.label}>Add tasks:</label>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        editIndex={editIndex}
        editValue={editValue}
        setEditValue={setEditValue}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;

const styles = {
  container: {
    maxWidth: '500px',
    margin: '100px auto',
    padding: '25px',
    background: '#F6FFC4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#676620',
    fontSize: '48px'
  },
  label: {
    display: 'block',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#AD9446',
    marginBottom: '10px'
  }
}