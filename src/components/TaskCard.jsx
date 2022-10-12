/* import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext' */
// this component become the "task" as props from the TaskList component
function TaskCard({ task, deteleTask }) {
    // to read a value from the TaskContext  
    /*     const valor = useContext(TaskContext)
        console.log('value from TaskContext:', valor)
     */
    //console.log(task)


    /*   function showAlert() {
          alert(task.id)
      } */


    /* const resDelete = task.id.filter((n) => n !== 0);
    console.log(resDelete); */
    return (
        /* we dont need here the key={task.id} 
        the key is moved now to the component TaskList 
        when the component is called through the html tag
        <TaskCard key={task.id} task={task} />


        by clicking the delete buton we use the filter function
        const resDelete = a.filter((n) => n !== 10);
        const resDelete = tasks.filter((task) => task.id !== tasksId);
        but called from the App component
        */
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => { deteleTask(task.id) }}
            >delete</button>
            <hr />
        </div >
    )
}

export default TaskCard