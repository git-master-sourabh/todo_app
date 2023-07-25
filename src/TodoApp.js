import React, { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function TodoApp(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    const addTask = () => {
        if(newTask.trim() !== ''){
            const newTaskObject = { id: uuidv4(), text: newTask, completed: false };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        }
    };
    const deleteTask = (taskId) =>{
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'done') return task.completed;
        if (filter === 'todo') return !task.completed;
        return true;
      });

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                   type = "text"
                   value = {newTask}
                   onChange = {e => setNewTask(e.target.value)}
                   placeholder="Enter your task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('done')}>Done</button>
            <button onClick={() => setFilter('todo')}>Todo</button>
            </div>
            <TodoList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask}/>
        </div>
    );
}
export default TodoApp;
