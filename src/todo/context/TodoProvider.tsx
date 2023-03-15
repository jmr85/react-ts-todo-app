import { TodoContext } from './TodoContext'
import { TodoState } from '../interfaces/interfaces';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: 1,
      description: "buy coffee at the corner store",
      completed: false
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
  return (
    <TodoContext.Provider value={{}}>
        {children}
    </TodoContext.Provider>
  )
}
