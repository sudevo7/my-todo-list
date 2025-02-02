import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const savedCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    setTodos(savedTodos);
    setCompleted(savedCompleted);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [todos, completed]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setCompleted([...completed, false]); 
  };

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
    if (!completed[index]) {
      setEditIndex(index);
      setEditValue(todos[index]);
    }
  };

  const saveEdit = () => {
    const updatedTodos = todos.map((todo, i) =>
      i === editIndex ? editValue : todo
    );
    setTodos(updatedTodos);
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
    maxWidth: '900px',
    margin: '50px auto',
    padding: '40px',
    background: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '90%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2C3E50',
    fontSize: '2.5rem',
    fontWeight: '600',
  },
};