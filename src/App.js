import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [completed, setCompleted] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const savedCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    setTodos(savedTodos);
    setCompleted(savedCompleted);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [todos, completed]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setCompleted([...completed, false]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    setCompleted(completed.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);
  };

  const startEditing = (index) => {
    if (!completed[index]) {
      setEditIndex(index);
      setEditValue(todos[index]);
    }
  };

  const saveEdit = () => {
    if (editValue.trim() === '') return;
    setTodos(todos.map((todo, i) => (i === editIndex ? editValue : todo)));
    setEditIndex(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My To-Do List</h1>
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
    maxWidth: '600px',
    margin: '50px auto',
    padding: '40px',
    background: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '90%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2C3E50',
    fontSize: '2.5rem',
    fontWeight: '600',
  },
};
