import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatusTask, deleteTask, fetchTask } from '../../store/actions/task';

const ListTasks = () => {
  const { tasks } = useSelector(state => state.task);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch, check]);

  const handleCheckBox = ({ target }) => {
    dispatch(changeStatusTask(target.id));
    setCheck(!check);
  }

  const handleClickDelete = ({ target }) => {
    dispatch(deleteTask(target.id));
    setCheck(!check);
  }
  return (
    <div>
      <div>
        <h1>ListTasks</h1>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>#CONTENT</th>
              <th>#STATUS</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks?.map((item, index) => (
                <tr key={`${item.id}_${index}`}>
                  <td>{item.id}</td>
                  <td>{item.content}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={`${item.id}`}
                      value={`${item.id}`}
                      onClick={handleCheckBox}
                      defaultChecked={item.status}
                    />
                  </td>
                  <th><button id={`${item.id}`} onClick={handleClickDelete}>Delete Task</button></th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListTasks;
