import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    const {todoState} = useContext(TodoContext)
    const {todos} = todoState;
    console.log("todos: ", todos);

  return (
    <ul>
       <TodoItem todo={todos}/>        
    </ul>
  )
}
