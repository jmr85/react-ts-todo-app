import { useReducer } from 'react';
import { TodoContext } from './TodoContext'
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: 1,
      description: "Buy coffee at the corner store",
      completed: true
    },
    {
      id: 2,
      description: "Pay rent",
      completed: false
    },
    {
      id: 3,
      description: "Buy coke",
      completed: false
    },
    {
      id: 4,
      description: "Walk the dog",
      completed: true
    },   
    {
      id: 5,
      description: "Buy groceries",
      completed: false
    },    
    {
      id: 6,
      description: "Call mom",
      completed: false
    },    
    {
      id: 7,
      description: "Finish homework",
      completed: true
    },
    {
      id: 8,
      description: "Go for a run",
      completed: false
    },
    {
      id: 9,
      description: "Attend dentist appointment",
      completed: false
    },
    {
      id: 10,
      description: "Read a book",
      completed: true
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
