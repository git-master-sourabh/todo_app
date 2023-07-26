import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addTask, deleteTask, toggleTask } from './redux/actions'; 
import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid';

function TodoApp({tasks, addTask, deleteTask, toggleTask }){
    // const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    const addTaskHandler = () =>{
        if(newTask.trim()!== ''){
            addTask(newTask);
            setNewTask('');
        }
    }

    const deleteTaskHandler = (taskId) => {
        deleteTask(taskId);
    }

    const toggleTaskHandler = (taskId) => {
        toggleTask(taskId);
    }
    // const addTask = () => {
    //     if(newTask.trim() !== ''){
    //         const newTaskObject = { id: uuidv4(), text: newTask, completed: false };
    //         setTasks([...tasks, newTaskObject]);
    //         setNewTask('');
    //     }
    // };
    // const deleteTask = (taskId) =>{
    //     setTasks(tasks.filter(task => task.id !== taskId));
    // };

    // const toggleTask = (taskId) => {
    //     setTasks(tasks.map(task =>
    //       task.id === taskId ? { ...task, completed: !task.completed } : task
    //     ));
    // };

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
                <button onClick={addTaskHandler}>Add</button>
            </div>
            <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('done')}>Done</button>
            <button onClick={() => setFilter('todo')}>Todo</button>
            </div>
            <TodoList tasks={filteredTasks} onDelete={deleteTaskHandler} onToggle={toggleTaskHandler}/>
        </div>
    );
}

const mapStateToProps = state => ({
    tasks: state.tasks,
});
const mapDispatchToProps = {
    addTask,
    deleteTask,
    toggleTask,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
// export default TodoApp;
