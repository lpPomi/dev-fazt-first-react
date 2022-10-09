
import { useState } from 'react'


function TaskForm() {



    // save the contend from input in a react state and variable with useState
    // for the title .. init is empty
    const [title, setTitle] = useState('')


    // to avoid refresh page by clock save form
    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault();
        console.log(title)
    }

    // to see on console what we are typing in the input field
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    // to save the title input  into the title variable using setTitle
    const getTitle = (e) => {
        setTitle(e.target.value)
        //console.log(e.target.value);
    };



    return (
        <form onSubmit={handleSubmit}>
            {/*  <input placeholder="create a task" onChange={handleChange} /> */}
            <input placeholder="create a task" onChange={getTitle} />

            <button onClick={() => {
                console.log('Hi Button');
            }}>
                save
            </button>
        </form>
    )
}

export default TaskForm