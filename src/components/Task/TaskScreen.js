import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListTasks from './ListTasks';
import { useDispatch } from 'react-redux';
import { newTaskAction } from '../../store/actions/task';

import './TaskScreen.css';
import ErrorTask from './ErrorTask';
const TaskScreen = () => {

  const { error } = useSelector(state => state.task)
  const [valuesForm, setValuesForm] = useState({
    content: ''
  });

  const { content } = valuesForm;

  const handleInputChange = ({ target }) => {
    setValuesForm({
      [target.name]: target.value
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTaskAction(valuesForm));
  };

  return (
    <div className="App">
      {
        (error !== 200) ? (<ErrorTask error={error} />) : (
          <div>
            <ListTasks />
            <br />
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  name="content"
                  value={content}
                  onChange={handleInputChange}
                />
                <button type="submit">NEW TASK</button>
              </form>
            </div>
            <Link to="/">
              <button> RETURN </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default TaskScreen;
