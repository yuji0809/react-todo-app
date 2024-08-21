import React from 'react';

const AddTodoButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick}>
            TODOを追加
        </button>
    );
};

export default AddTodoButton;
