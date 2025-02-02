import React, { useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

function TodoList({
  todos,
  deleteTodo,
  toggleDone,
  completed,
  startEditing,
  editIndex,
  editValue,
  setEditValue,
  saveEdit,
  cancelEdit,
}) {
  const [isInputHovered, setIsInputHovered] = useState(false);

  const styles = {
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: (isCompleted) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      marginBottom: '15px',
      background: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontSize: '1rem',
      textDecoration: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? '#9AA0A6' : '#333',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.3s ease',
    }),
    checkbox: {
      marginRight: '15px',
      cursor: 'pointer',
    },
    editContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      gap: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: '5px',
      border: isInputHovered ? '2px solid #E0E0E0' : '2px solid #CCCCCC',
      fontSize: '1rem',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      color: '#333',
      background: '#F5F5F5', // Light gray background for input
    },
    saveButton: {
      background: 'none',
      color: '#4CAF50',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.3s, transform 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    cancelButton: {
      background: 'none',
      color: '#FF6B6B',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.3s, transform 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    todoText: {
      flex: 1,
      color: '#333',
      fontSize: '1rem',
    },
    editButton: {
      background: 'none',
      color: '#FFC107',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.3s, transform 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      opacity: (isCompleted) => (isCompleted ? 0.5 : 1),
      pointerEvents: (isCompleted) => (isCompleted ? 'none' : 'auto'),
    },
    deleteButton: {
      background: 'none',
      color: '#FF6B6B',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.3s, transform 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
  };

  return (
    <ul style={styles.list}>
      {todos.map((todo, index) => (
        <li key={index} style={styles.listItem(completed[index])}>
          {editIndex === index ? (
            <div style={styles.editContainer}>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                style={styles.input}
                onMouseEnter={() => setIsInputHovered(true)}
                onMouseLeave={() => setIsInputHovered(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEdit();
                }}
              />
              <button onClick={saveEdit} style={styles.saveButton}>
                <FaCheck /> Save
              </button>
              <button onClick={cancelEdit} style={styles.cancelButton}>
                <FaTimes /> Cancel
              </button>
            </div>
          ) : (
            <>
              <div>
                <input
                  type="checkbox"
                  checked={completed[index]}
                  onChange={() => toggleDone(index)}
                  style={styles.checkbox}
                />
                <span style={styles.todoText}>{todo}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => startEditing(index)}
                  style={{
                    ...styles.editButton,
                    opacity: completed[index] ? 0.5 : 1,
                    pointerEvents: completed[index] ? 'none' : 'auto',
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  style={styles.deleteButton}
                >
                  <FaTrash />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;