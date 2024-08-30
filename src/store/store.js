import { createStore } from 'redux';
const ADD_TASK = 'ADD_TASK';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const TASK_COMPLETION = 'TASK_COMPLETION';
const SHOW_COMPLETED_TASKS = 'SHOW_COMPLETED_TASKS';
const SHOW_UNCOMPLETED_TASKS = 'SHOW_UNCOMPLETED_TASKS';
const SHOW_ALL_TASKS = 'SHOW_ALL_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const DELETE_ALL_TASK = 'DELETE_ALL_TASK';
const SORT_UP = 'SORT_UP';
const SORT_DOWN = 'SORT_DOWN';

const initialState = {
    tasks: [],
    filteredTasks: [],
    newText: '',
    isButtonSelect: false,
    filter: 'SHOW_ALL_TASKS'
};

const applyFilter = (tasks, filter) => {
    switch (filter) {
        case SHOW_COMPLETED_TASKS:
            return tasks.filter(task => task.completed === true);
        case SHOW_UNCOMPLETED_TASKS:
            return tasks.filter(task => task.completed === false);
        default:
            return tasks;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const updatedTasks = [...state.tasks, { id: state.tasks.length + 1, text: state.newText, completed: false }];
            return{
                ...state,
                tasks: updatedTasks,
                filteredTasks: applyFilter(updatedTasks, state.filter),
                newText: ''
            };
        case CHANGE_INPUT_VALUE:
            return{
                ...state,
                newText: action.payload
            };
        case DELETE_TASK:
            const tasksAfterDeletion = state.tasks.filter(task => task.id !== action.payload);
            return {
                ...state,
                tasks: tasksAfterDeletion,
                filteredTasks: applyFilter(tasksAfterDeletion, state.filter)
            };
        case DELETE_ALL_TASK:
            return{
                ...state,
                tasks: [],
                filteredTasks: []
            }
        case TASK_COMPLETION:
            const tasksAfterCompletionToggle = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            return{
                ...state,
                tasks: tasksAfterCompletionToggle,
                filteredTasks: applyFilter(tasksAfterCompletionToggle, state.filter)
            };
        case SHOW_COMPLETED_TASKS:
        case SHOW_UNCOMPLETED_TASKS:
        case SHOW_ALL_TASKS:
            return{
                ...state,
                filter: action.type,
                filteredTasks: applyFilter(state.tasks, action.type)
            };
        case SORT_DOWN:
            return{
                ...state,
                filteredTasks: [...state.tasks].sort((a, b) => a.text.localeCompare(b.text))
            };
        case SORT_UP:
            return{
                ...state,
                filteredTasks: [...state.tasks].sort((a, b) => b.text.localeCompare(a.text))
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;