import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import TodoInput from './components/Todos/TodoInput';
import TodoList from './components/Todos/TodoList';
import AddTodoButton from './components/Todos/AddTodoButton';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<string>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, todo]);
      setTodo('');
      setIsModalOpen(false);
    } else {
      alert('TODO名は1文字以上である必要があります');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoButton onClick={() => setIsModalOpen(true)} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>新しいTODOを追加</h2>
        <TodoInput todo={todo} setTodo={setTodo} />
        <button onClick={handleAddTodo}>追加</button>
        <button onClick={() => setIsModalOpen(false)}>閉じる</button>
      </Modal>
    </div>
  );
};

export default App;
