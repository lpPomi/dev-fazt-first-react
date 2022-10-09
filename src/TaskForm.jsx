
function TaskForm() {

    // to avoid refresh page by clock save form
    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault();
    }

    // to see on cobnsole what we are typing in the input field
    const handleChange = (e) => {
        console.log(e.target.value);
    };



    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="create a task" onChange={handleChange} />
            <button onClick={() => {
                console.log('Hi Button');
            }}>
                save
            </button>
        </form>
    )
}

export default TaskForm