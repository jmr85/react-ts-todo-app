import { Todo } from '../interfaces/interfaces'

interface props {
    todo: Todo[];
}

export const TodoItem = (props: props) => {
    const { todo } = props

  return (
    <>
         {
            todo.map(tod => 
                <li 
                    key={tod.id}
                >
                    {tod.description}
                </li>
            )
        }
    </>
  )
}
