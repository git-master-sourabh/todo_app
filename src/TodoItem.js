import React from 'react';

function TodoItem({task, onDelete, onToggle}){
    const handleToggle = () => {
        onToggle(task.id);
    };
    return (
        <li>
            <label>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            </label>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}
export default TodoItem;