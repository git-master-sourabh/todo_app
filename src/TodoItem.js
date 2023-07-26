import React from 'react';
import { connect } from 'react-redux';
import {deleteTask, toggleTask} from './redux/actions';

function TodoItem({task, deleteTask, toggleTask}){
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            </label>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

const mapDispatchToProps = {
    deleteTask,
    toggleTask,
}

export default connect(null, mapDispatchToProps)(TodoItem);

// export default TodoItem;