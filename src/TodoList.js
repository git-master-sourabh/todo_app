import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onToggle}){
    return (
        <ul>
            {tasks.map(task =>(
                <TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </ul>
    );
     
}
export default TodoList;
