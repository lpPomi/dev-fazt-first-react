
import TaskCard from './TaskCard';

// this component become the "tasks" as props from App component
function TaskList({ tasks }) {
  // we can use props or {tasks} in the TaskList() parameter
  // also from TaskList(props)  to TaskList({tasks})
  // then we don need to write  props.tasks.length anymore...
  // tasks.length is ok


  // check if the tasks are empty
  if (tasks.length === 0) {
    /*     console.log('tasks are empty') */
    return <h1>tasks are empty</h1>
  }

  return (

    < div >
      <h1>* Read tasks *</h1>
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
          /* <div key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
             </div>
          */
        ))
      }
    </div >
  )
}

export default TaskList
