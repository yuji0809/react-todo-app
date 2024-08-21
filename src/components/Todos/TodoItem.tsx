import React from 'react';

type TodoItemProps = {
    todo: string;
    onDelete: () => void;
};

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
    return (
        <li>
            {todo}
            <button onClick={onDelete}>削除</button>
        </li>
    );
};

export default TodoItem;
