import './ToDoInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeInputValue } from '../../Actions/ChangeInputValue';
import { AddTask } from '../../Actions/AddTask';
import { useState } from 'react';

function ToDoInput(){

    const dispatch = useDispatch();
    let value = useSelector(state => state.newText);
    const [showMessage, setShowMessage] = useState(false);

    function inputValueHandler(e){
        let inputValue = e.target.value;
        dispatch(ChangeInputValue(inputValue));
        setShowMessage(false);
    }

    function addTask(){
        if(value.trim().length === 0){
            setShowMessage(true);  
        }
        else{
            dispatch(AddTask());
            setShowMessage(false);
        }
    }
    

    return(
            <div className="ToDoInput">
                <input type="text" placeholder='New Task' onChange={inputValueHandler} value={value}/>
                <button onClick={addTask}>Add</button>
                {showMessage && <div className='Input-message'>Please enter a task</div>}
            </div>
    )
}

export default ToDoInput;