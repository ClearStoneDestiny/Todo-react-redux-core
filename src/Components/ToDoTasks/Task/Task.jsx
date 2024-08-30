import './Task.css';
import 'animate.css';
import trashcan from '../../../assets/icons/trashcan-icon.svg';
import change from '../../../assets/icons/change-icon.png';
import pallette from '../../../assets/icons/pallete-icon.png';
import { useDispatch } from 'react-redux';
import { DeleteTask } from '../../../Actions/DeleteTask';
import { TaskCompletion } from '../../../Actions/TaskCompletion';
import { ChangeText } from '../../../Actions/ChangeText.js';

function Task({tasks}){

    const dispatch = useDispatch();

    function deleteTask(id){
        dispatch(DeleteTask(id));
    }

    function taskCompletion(id){
        dispatch(TaskCompletion(id));
    }

    function changeText(id){
        dispatch(ChangeText(id))
    }

    return(
        <div className='List'>
            {
                tasks.map(task => (
                    <li key={task.id} className={`animate__animated animate__bounceInLeft ${task.completed ? 'Uncompleted' : 'Completed'}`}  
                                     onClick={() => taskCompletion(task.id)}>
                        {task.text}
                        <div className='Task-icons'>
                            <img onClick={() => deleteTask(task.id)} src={trashcan} alt="trashcan" />
                            <img onClick={() => changeText(task.id)} src={change} alt="change" />
                            <img src={pallette} alt="pallette" />
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default Task;