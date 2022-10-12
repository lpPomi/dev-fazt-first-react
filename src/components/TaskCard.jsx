
// this component become the "task" as props from the TaskList component
function TaskCard({ task }) {
    return (
        /* we dont need here the key={task.id} 
        the key is moved now to the component TaskList 
        when the component is called through the html tag
        <TaskCard key={task.id} task={task} />
        */
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div >
    )
}

export default TaskCard