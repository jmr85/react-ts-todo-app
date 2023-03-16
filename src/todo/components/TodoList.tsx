import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {

    const {todoState} = useContext(TodoContext)
    const {todos} = todoState;
    console.log("todos: ", todos);
    
  return (
    <ul>
        {
            todos.map(todo => 
                <li 
                    key={todo.id}
                >
                    {todo.description}
                </li>
            )
        }
            
    </ul>
  )
}
