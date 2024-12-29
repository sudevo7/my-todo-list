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
            flexWrap: 'wrap',
        },
        input: {
            flex: 1,
            padding: '15px',
            borderRadius: '5px',
            border: isInputHovered? '1px solid #999999' :'1px solid #CCCCCC',
            outline: 'none',
            transition: 'border-color 0.5s',
            color: '#676620',
            width: '100%',
            marginBottom: '10px',
            fontSize: '18px'
        },
        button: {
            padding: '10px 20px',
            background: isButtonHovered ? '#32A06C' :"#3BAF7A",
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.5s',
            borderRadius: '5px',
            width: '100%',
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
                Add
        </button>
    </div>
  )
}

export default TodoInput