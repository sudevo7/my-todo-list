import React, {useState} from 'react'

function TodoInput({addTodo}) {
    const [todo, setTodo] = useState('');
    const [isInputHovered, setIsInputHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleAdd = () => {
        if (todo.trim() !== '') {
            addTodo(todo);
            setTodo('');
          }
    }

    const styles = {
        inputContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
        },
        input: {
            flex: 1,
            padding: '15px',
            marginRight: '10px',
            borderRadius: '5px',
            border: isInputHovered? '1px solid #757575' :'1px solid #676620',
            outline: 'none',
            transition: 'border-color 0.5s',
            background: '#fcfbf7', 
            color: '#676620',
            fontSize: '18px'
        },
        button: {
            padding: '10px 20px',
            backgroundColor: isButtonHovered ? '#676620' :"#AD9446",
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.5s',
            borderRadius: '5px',
            fontSize: '18px'
        }, 
    }

  return (
    <div style={styles.inputContainer}>
        <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Eg. walk dog"
        style={ styles.input }
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
      />
       <button 
            onClick={handleAdd} 
            style={styles.button}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            >        
                Add
        </button>
    </div>
  )
}



export default TodoInput