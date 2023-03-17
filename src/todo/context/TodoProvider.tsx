import { useReducer } from 'react';
import { TodoContext } from './TodoContext'
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: 1,
      description: "buy coffee at the corner store",
      completed: true
    },
    {
      id: 2,
      description: "go see the dentist for a toothache",
      completed: false
    },
    {
      id: 3,
      description: "buy coke",
      completed: false
    }
  ],
  completed: 0,
  pending: 2
}


interface props{
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = ( id: number ) => {
      dispatch({ type: 'toggleTodo', payload: {id} });
  }
  
  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
        {children}
    </TodoContext.Provider>
  )
}
