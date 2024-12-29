import React, { useState } from "react";

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
      listStyle: "none",
      padding: 0,
    },
    listItem: (isCompleted) => ({
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row", 
      flexWrap: "wrap",
      alignItems: "center",
      padding: "15px",
      marginBottom: "10px",
      background: "#F5F5F5",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontSize: "16px",
      textDecoration: isCompleted ? "line-through" : "none",
      color: isCompleted ? "#9AA0A6" : "#333",
      transition: "all 0.3s ease",
    }),
    checkbox: {
      marginRight: "10px",
      color: "#28A745",
    },
    editContainer: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      flexWrap: "wrap",
    },
    input: {
      flex: 1,
      marginRight: "10px",
      padding: "10px",
      borderRadius: "5px",
      border: isInputHovered ? '1px solid #999999' :'1px solid #CCCCCC',
      fontSize: "16px",
      transition: 'border-color 0.5s',
      color: '#676620',
      width: "100%",
    },
    saveButton: {
      background: "#28A745",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      marginRight: "5px",
      cursor: "pointer",
      fontSize: '16px'
    },
    cancelButton: {
      background: "#DC3545",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: '16px'
    },
    todoText: {
      flex: 1,
      color: "#676620",
      fontSize: "16px",
    },
    editButton: {
      background: "#ffc107",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      marginRight: "5px",
      cursor: "pointer",
      fontSize: '16px'
    },
    deleteButton: {
      background: "#DC3545",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: '16px'
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
              <i class="fa-solid fa-circle-check"></i>
              </button>
              <button
                onClick={cancelEdit}
                style={styles.cancelButton}
              >
                <i class="fa-solid fa-xmark"></i>
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
                  onMouseEnter={() => setIsInputHovered(true)}
                  onMouseLeave={() => setIsInputHovered(false)}
                />
                <span>{todo}</span>
              </div>
              <div>
                <button
                  onClick={() => startEditing(index)}
                  style={styles.editButton}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  style={styles.deleteButton}
                >
                  <i class="fa-solid fa-trash"></i>
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
