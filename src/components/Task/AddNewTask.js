import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { newTaskAction } from '../../store/actions/task';

const AddNewTask = () => {
  const dispatch = useDispatch();
  const [contentTask, setContentTask] = useState('');
  const [newTask, setNewTask] = useState({});

  const handleAddNewTask = () => {
    let auxiliaryTask = {}
    auxiliaryTask.content = contentTask;
    setNewTask(auxiliaryTask);
  };

  useEffect(() => {
    if('content' in newTask ){
      dispatch(newTaskAction(newTask));
      setContentTask('');
    }
  }, [newTask, dispatch]);

  const handleInputChange = ({target}) => {
    setContentTask(target.value);
  };

  return (
    <div>
      <input
        placeholder="Add new Task"
        name="newTask"
        value={contentTask}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <button onClick={handleAddNewTask}>
        Add New Task :D
      </button>
      <Link to="/task">
        <button>
            RETURN
        </button>
      </Link>
    </div>
  )
}

export default AddNewTask;
