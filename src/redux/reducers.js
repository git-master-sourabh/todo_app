import { ADD_TASK, DELETE_TASK, TOGGLE_TASK} from './actions';
import { v4 as uuidv4 } from 'uuid';
const initialState = [];

const taskReducer = (state = initialState, action) => {
      switch(action.type){
        case ADD_TASK:
            return [
                ...state,
                {id: uuidv4(), text: action.payload.text, completed: false},
            ];
        case DELETE_TASK:
            return state.filter((task) => task.id !== action.payload.taskId); 
        case TOGGLE_TASK:
            return state.map((task) =>
              task.id === action.payload.taskId
              ? { ...task, completed: !task.completed }
              :task
            );
        default:
           return state;          
    }
};

export default taskReducer;