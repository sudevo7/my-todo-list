import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState('');
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleAdd = () => {
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  const styles = {
    inputContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '10px',
    },
    input: {
      flex: 1,
      padding: '15px',
      borderRadius: '10px',
      border: isInputHovered ? '2px solid #E0E0E0' : '2px solid #CCCCCC',
      outline: 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      color: '#333',
      width: '100%',
      fontSize: '1rem',
      background: '#F5F5F5', // Light gray background for input
    },
    button: {
      padding: '15px 25px',
      background: isButtonHovered ? '#FFA500' : '#FF8C00', // Light orange for add button
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s, transform 0.2s',
      borderRadius: '10px',
      width: '100%',
      fontSize: '1rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Eg. walk dog"
        style={styles.input}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd();
        }}
      />
      <button
        onClick={handleAdd}
        style={styles.button}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        <FaPlus /> Add Task
      </button>
    </div>
  );
}

export default TodoInput;