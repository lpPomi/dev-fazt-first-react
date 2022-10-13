import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// moved from TaskList

/* import TaskCard from './TaskCard'; */

function App() {

  // moved from TaskList

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


  return (
    <main className='bg-zinc-700 h-screen'>
      {/* send the data (tasks) from the function CreateTaskFunction to the TaskForm component 
          createTask is the property in the {..} lies the function createTaskFunction  
      */}

      <div className='container mx-auto p-10'>
        {/*  <TaskForm createTask={createTaskFunction} /> */}
        <TaskForm />
        {/* the tasks are send via props to the component TaskList! */}
        {/*  <TaskList tasks={tasks} deleteTask={deleteTaskFunction} /> */}
        <TaskList />

        {/*       <TaskCard tasks={tasks} /> */}
      </div>
    </main>
  );
}
export default App;
