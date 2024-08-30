import './ToDoButtons.css';
import { useSelector, useDispatch } from 'react-redux';
import { ShowCompletedTasks } from '../../Actions/ShowCompletedTasks';
import { ShowUnCompletedTasks } from '../../Actions/ShowUnCompletedTasks';
import { ShowAllTasks } from '../../Actions/ShowAllTasks';
import { DeleteAllTasks } from '../../Actions/DeleteAllTasks';
import { SortUp } from '../../Actions/SortUp';
import { SortDown } from '../../Actions/SortDown';

function ToDoButtons(){

    let isSelected = useSelector(state => state.isButtonSelect);
    const dispatch = useDispatch();

    function showCompleted(){
        dispatch(ShowCompletedTasks());
    }

    function showUnCompleted(){
        dispatch(ShowUnCompletedTasks());
    }

    function showAll(){
        dispatch(ShowAllTasks());
    }

    function deleteAll(){
        dispatch(DeleteAllTasks())
    }

    function sortDown(){
        dispatch(SortDown());
    }

    function sortUp(){
        dispatch(SortUp());
    }

    return(
            <div className='ToDoButtons'>
                <div className='Upper-buttons'>
                    <button onClick={showAll}>All</button>
                    <button onClick={showCompleted}>Completed</button>
                    <button onClick={showUnCompleted}>Uncompleted</button>
                    <button onClick={deleteAll}>Delete All</button>
                </div>
                <div className='Lower-buttons'>
                    <button onClick={sortDown}>A-Z</button>
                    <button onClick={sortUp}>Z-A</button>
                </div>
            </div>
    )
}

export default ToDoButtons;