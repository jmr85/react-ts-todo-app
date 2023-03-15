export interface Todo {
    id: number;
    description: string;
    completed: boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
}