import React from 'react';

interface TodoInputProps {
    todo: string;
    setTodo: (value: string) => void;
}

const TodoInput = ({ todo, setTodo }: TodoInputProps) => {
    return (
        <input 
            type="text" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            placeholder="Todoを入力してください"
        />
    );
};

export default TodoInput;
