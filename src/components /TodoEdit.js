import React, {useState} from 'react'

export const TodoEdit = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Modifier la tâche.' />
    <button type="submit" className='todo-btn'>Mettre à jour</button>
  </form>
  )
}