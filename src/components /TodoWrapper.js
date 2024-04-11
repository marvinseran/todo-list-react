import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { TodoEdit } from './TodoEdit';


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        )
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }
    
      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };

    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                <TodoEdit  editTodo={editTask} task={todo} /> 
                ) : (
                <Todo
                    task={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo} 
                />
            )))}
        </div>
    )
    
}