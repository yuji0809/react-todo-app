import React from 'react';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: string[];
    handleDeleteTodo: (index: number) => void;
};

const TodoList = ({ todos, handleDeleteTodo }: TodoListProps) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    onDelete={() => handleDeleteTodo(index)} 
                />
            ))}
        </ul>
    );
};

export default TodoList;
