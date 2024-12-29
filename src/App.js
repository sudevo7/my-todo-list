import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [completed, setCompleted] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const updatedCompleted = completed.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setCompleted(updatedCompleted);
  };

  const toggleDone = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index]; 
    setCompleted(updatedCompleted);
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
        toggleDone={toggleDone}
        completed={completed}
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
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
    border: '1px solid #E0E0E0'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#4A4A4A',
    fontSize: '48px'
  },
  label: {
    display: 'block',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#7A7A7A',
    marginBottom: '10px'
  }
}