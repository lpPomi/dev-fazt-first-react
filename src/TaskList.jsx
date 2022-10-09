import { tasks as data } from './tasks';
import { useState, useEffect } from 'react';

// without useState ... not good
/* function TaskList() {
  return (
    <div>
      <h1>Read tasks</h1>
      {tasks.map((record) => {
        return (
          <div>
            {record.id},{record.title},{record.description}
          </div>
        );
      })}
    </div>
  );
} */

// using useState and useEffect

function TaskList() {
  // at init the tasks are empty
  // when the component is loaded at the first time the tasks are empty
  // then we must use useEffect to get the data when the component is loaded 
  // after loaded we assignt the tasks to userState
  // ... = useState([tasks]); 
  const [tasks, setTasks] = useState([]);


  /* useEffect(function () {
    console.log('render from useEffect');
  },[]);
 */

  /*    use useEffect when the component is loaded
     and load into setTasks the values from tasks 
     but we have a conflict with variable name tasks
     we have to assign the data from the import file tasks
     in this case we must use an alias data  */
  useEffect(() => {
    //console.log('render from useEffect');
    //setTasks(tasks)
    setTasks(data)
  }, []);


  // check if the tasks are empty
  if (tasks.length === 0) {
    /*     console.log('tasks are empty') */
    return <h1>tasks are empty</h1>
  }

  //console.log(data)

  return (

    < div >
      <h1>* Read tasks *</h1>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div >
  )
}

export default TaskList
