import { Todo } from '../interfaces/interfaces'

interface props {
    todo: Todo;
}

export const TodoItem = ({todo}: props) => {
    
    const handleDbClick = () => {
        console.log("double click: ", todo.description)
    }

  return (
        <li 
            onDoubleClick={handleDbClick}
        >
            {todo.description}
        </li>       
  )
}
