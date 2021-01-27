import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { newTask } from '../../store/actions/task';

const NewTask = () => {

  // useState
  const [valuesForm, setValuesForm ] = useState({
    content: ''
  });
  const { content } = valuesForm;

  const handleInputChange = ({ target })=> {
    setValuesForm({
      [target.name]: target.value
    });
  }
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(valuesForm));
  }
  return (
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
  )
}

export default NewTask
