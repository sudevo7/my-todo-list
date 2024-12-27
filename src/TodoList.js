import React, {useState} from 'react';

function TodoList({
  todos,
  deleteTodo,
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
        listItem: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px',
          marginBottom: '10px',
          background: '#E3DF81',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontSize: '16px'
        },
        editContainer: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },
        input: {
          flex: 1,
          marginRight: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: isInputHovered? '1px solid #757575' :'1px solid #676620',
          background: '#fcfbf7',
          fontSize: '16px'
        },
        saveButton: {
          background: '#AD9446',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          marginRight: '5px',
          cursor: 'pointer',
        },
        cancelButton: {
          background: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        },
        todoText: {
          flex: 1,
          color: '#676620',
          fontSize: '16px'
        },
        editButton: {
          background: '#ffc107',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          marginRight: '5px',
          cursor: 'pointer',
        },
        deleteButton: {
          background: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        },
      };
          
  return (
    <ul style={styles.list}>
      {todos.map((todo, index) => (
        <li key={index} style={styles.listItem}>
          {editIndex === index ? (
            <div style={styles.editContainer}>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                style={styles.input}
                onMouseEnter={() => setIsInputHovered(true)}
                onMouseLeave={() => setIsInputHovered(false)}
              />
              <button onClick={saveEdit} style={styles.saveButton}><i class="fa-regular fa-floppy-disk"></i></button>
              <button onClick={cancelEdit} style={styles.cancelButton}><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
          ) : (
            <>
              <span style={styles.todoText}>{todo}</span>
              <div>
                <button
                  onClick={() => startEditing(index)}
                  style={styles.editButton}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  style={styles.deleteButton}
                >
                  <i className="fa-solid fa-trash"></i>
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

